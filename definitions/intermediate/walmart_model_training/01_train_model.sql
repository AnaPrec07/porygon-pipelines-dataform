-- This sql does everything: 
-- Train model, 
-- extract model reports, 
-- retrain with top 100 features, 
-- perform hyperparametr tuning
-- extract model reports again
-- register model

DECLARE store_id STRING DEFAULT "CA_1";

-- Train XGBoost model for monthly demand forecasting
CREATE OR REPLACE MODEL `porygon-pipelines.bigquery_models.initial_walmart_model_store_{store_id}`
OPTIONS (
    MODEL_TYPE = 'BOOSTED_TREE_REGRESSOR',
    -- Early stopping to avoid unnecessary trees
    EARLY_STOP = TRUE,
    MAX_ITERATIONS = 100,
    -- Enable standardization for skewed retail features
    DATA_SPLIT_METHOD = 'RANDOM',
    -- Feature importance
    ENABLE_GLOBAL_EXPLAIN = TRUE
)
AS
SELECT
    tgt_monthly_sales_sum_3_next_months AS label,
    m9.* EXCEPT(
      ctx_date_month,
      ctx_cat_id,
      ctx_dept_id,
      ctx_item_id,
      ctx_state_id,
      ctx_store_id,
      tgt_monthly_sales,
      tgt_monthly_sales_sum_3_next_months,
    )
   
FROM `porygon-pipelines.walmart_training_tables.training_table_v9` m9
WHERE ctx_date_month < "2015-01-01" AND ctx_date_month >="2012-01-01"
AND ctx_store_id = store_id;

CREATE OR REPLACE TABLE `porygon-pipelines.walmart_model_reports.initial_feature_importance_store_{store_id}` AS
SELECT *
FROM ML.FEATURE_IMPORTANCE(
  MODEL `porygon-pipelines.bigquery_models.initial_walmart_model_store_{store_id}`
)
ORDER BY importance DESC;

DECLARE feature_list STRING;

SET feature_list = (
  SELECT STRING_AGG(CONCAT("`", feature, "`"))
  FROM `porygon-pipelines.walmart_model_reports.initial_feature_importance_store_{store_id}`
);

EXECUTE IMMEDIATE FORMAT("""
  CREATE OR REPLACE MODEL `porygon-pipelines.bigquery_models.final_walmart_model_store_{store_id}`
  OPTIONS(
    model_type = 'XGBOOST_REGRESSOR',
    NUM_TRIALS = 20,
    HPARAM_TUNING_ALGORITHM = 'GRID_SEARCH',
    BOOSTER_TYPE = HPARAM_CANDIDATES(['GBTREE', 'DART']),
    DART_NORMALIZE_TYPE = HPARAM_CANDIDATES(['TREE', 'FOREST']),
    NUM_PARALLEL_TREE = HPARAM_RANGE(1,5),
    MAX_TREE_DEPTH = HPARAM_RANGE(1,10),
    DROPOUT = HPARAM_RANGE(0.0,0.6),
    L1_REG = HPARAM_RANGE(0,10),
    L2_REG = HPARAM_RANGE(0,10),
    LEARN_RATE = HPARAM_RANGE(0.,1.0),
    TREE_METHOD = 'HIST',
    MIN_TREE_CHILD_WEIGHT = HPARAM_RANGE(0,5),
    SUBSAMPLE = HPARAM_RANGE(0, 0.6),
    DATA_SPLIT_METHOD = 'RANDOM',
  )
  AS
  SELECT %s, label
  FROM porygon-pipelines.walmart_training_tables.training_table_v9
""", feature_list);

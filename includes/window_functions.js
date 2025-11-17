/**
 * Generates LEAD window function for multiple periods
 * @param {string} columnName - Column to apply LEAD to
 * @param {number} maxLead - Maximum number of LEAD periods (e.g., 28 for 28 days ahead)
 * @param {string} partitionBy - Column(s) to partition by
 * @param {string} orderBy - Column(s) to order by
 * @param {string} alias - Prefix for the generated column aliases (e.g., 'target_')
 * @returns {string} Formatted LEAD window functions
 */
function generateLeadColumns(columnName, maxLead, partitionBy, orderBy, alias = 'lead_') {
  const columns = [];
  for (let i = 1; i <= maxLead; i++) {
    columns.push(
      `    LEAD(${columnName}, ${i}) OVER (PARTITION BY ${partitionBy} ORDER BY ${orderBy}) AS ${columnName}_${alias}${i}_months`
    );
  }
  return columns.join(',\n');
}

/**
 * Alternative: Generate LAG window function
 */
function generateLagColumns(columnName, maxLag, partitionBy, orderBy, hierarchy_name='', alias = 'lag_',) {
  const columns = [];
  for (let i = 1; i <= maxLag; i++) {
    columns.push(
      `    LAG(${columnName}, ${i}) OVER (PARTITION BY ${partitionBy} ORDER BY ${orderBy}) AS ${columnName}${hierarchy_name}_${alias}${i}_months`
    );
  }
  return columns.join(',\n');
}

function generateRollAvgNoPartition(columnName, alias = 'roll_avg_', windows = [3, 6, 12]) {
  const columns = [];
  windows.forEach(i => {
    columns.push(
      `    AVG(${columnName}) OVER (ORDER BY ctx_date_month ROWS BETWEEN ${i} PRECEDING AND CURRENT ROW) AS ${columnName}_${alias}${i}_months`
    );
  });
  return columns.join(',\n');
}

module.exports = {
  generateLeadColumns,
  generateLagColumns,
  generateRollAvgNoPartition
};
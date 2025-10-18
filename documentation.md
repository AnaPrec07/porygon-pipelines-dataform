---
layout: page
title: Documentation
permalink: /documentation/
---

# Project Documentation

## Getting Started

### Prerequisites
- Google Cloud Platform account with BigQuery enabled
- Access to the BigQuery public datasets (specifically `bigquery-public-data.thelook_ecommerce`)
- Dataform CLI or Google Cloud Console access

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AnaPrec07/porygon-pipelines-dataform.git
   cd porygon-pipelines-dataform
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Your Project**
   Update `workflow_settings.yaml` with your GCP project details:
   ```yaml
   defaultProject: your-gcp-project-id
   defaultDataset: your_dataset_name
   defaultAssertionDataset: your_assertions_dataset
   ```

4. **Compile and Run**
   ```bash
   dataform compile
   dataform run
   ```

## Data Model Documentation

### Source Tables

#### The Look E-commerce Dataset
The project uses Google's public "The Look" e-commerce dataset, which contains realistic e-commerce data for demonstration purposes.

**events**
- Primary Key: `event_id`
- Contains user interaction data including page views, cart actions, and purchases
- Key fields: `user_id`, `session_id`, `event_type`, `traffic_source`

**orders**
- Primary Key: `order_id`
- Order header information with status tracking
- Key fields: `user_id`, `status`, `created_at`, `shipped_at`, `delivered_at`

**products**
- Primary Key: `product_id`
- Product catalog with hierarchical categories
- Key fields: `brand`, `category`, `name`, `retail_price`, `cost`

**users**
- Primary Key: `user_id`
- Customer master data with demographics
- Key fields: `first_name`, `last_name`, `email`, `age`, `gender`, `country`

**inventory_items**
- Primary Key: `inventory_item_id`
- Product inventory tracking
- Key fields: `product_id`, `created_at`, `sold_at`, `cost`

**order_items**
- Primary Key: `order_id`, `product_id`
- Order line items with pricing
- Key fields: `inventory_item_id`, `sale_price`, `returned_at`

### Intermediate Tables

#### Dimension Tables

**users_dim**
- Clean customer master data
- Enriched with segmentation and geographic information
- Slowly Changing Dimension Type 1 implementation

**products_dim**
- Product master with standardized categories
- Cost and pricing history
- Brand and category hierarchies

**orders_dim**
- Order header with calculated metrics
- Processing times and lead times
- Status tracking and lifecycle management

**inventory_dim**
- Inventory lifecycle tracking
- Days in inventory calculations
- Availability status management

#### Fact Tables

**events_fct**
- User interaction events with enriched context
- Session-level aggregations
- Traffic source attribution

**trx_fct**
- Transaction-level fact table
- Profit calculations and margin analysis
- Customer and product dimensions

### Reporting Views

**profit_view**
- Aggregated profit analysis
- Multiple dimensional cuts (brand, category, country, etc.)
- Time-series profit tracking

**profit_matrix_view**
- Cross-tabulated profit analysis
- Optimized for matrix-style reporting
- Looker Studio integration ready

## Code Structure

### File Organization
```
definitions/
├── sources/           # Source table declarations
├── intermediate/      # Business logic transformations  
└── reporting/         # Presentation layer views

includes/              # Shared functions and macros
docs/                 # Database documentation (DBML)
```

### Naming Conventions

- **Sources**: `source_system.table_name`
- **Dimensions**: `entity_dim` (e.g., `users_dim`, `products_dim`)
- **Facts**: `subject_fct` (e.g., `events_fct`, `trx_fct`)
- **Views**: `purpose_view` (e.g., `profit_view`)

### Dependencies

The project uses a clear dependency structure:
1. Sources (no dependencies)
2. Intermediate tables (depend on sources)
3. Reporting views (depend on intermediate tables)

## Data Quality

### Built-in Checks
- Primary key uniqueness validation
- Referential integrity checks
- Data freshness monitoring
- Null value validation for critical fields

### Testing Strategy
- Unit tests for individual transformations
- Integration tests for end-to-end flows
- Data quality assertions at each layer

## Performance Considerations

### BigQuery Optimizations
- Tables are partitioned by date where appropriate
- Clustering on frequently filtered columns
- Efficient JOIN patterns to minimize compute costs

### Dataform Best Practices
- Incremental materializations for large tables
- Proper dependency management
- SQL optimization for BigQuery

## Common Use Cases

### Business Intelligence
- Revenue and profit analysis
- Customer segmentation and lifetime value
- Product performance tracking
- Geographic sales analysis

### Data Science
- Customer behavior analysis
- Recommendation engine data
- Churn prediction datasets
- Market basket analysis

## Troubleshooting

### Common Issues

**Permission Errors**
- Ensure your service account has BigQuery Data Editor permissions
- Verify access to the public datasets

**Compilation Errors**
- Check `workflow_settings.yaml` configuration
- Validate SQL syntax in .sqlx files
- Ensure proper dependency declarations

**Performance Issues**
- Review query execution plans in BigQuery console
- Consider increasing cluster sizes for large operations
- Optimize JOIN orders and filtering conditions

### Getting Help
- Check the [Dataform documentation](https://cloud.google.com/dataform/docs)
- Review BigQuery best practices
- Open an issue on the project repository
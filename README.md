# Porygon Pipelines: Enterprise Data Engineering with Google Dataform

> **A production-ready data engineering project demonstrating a modern data stack implementation, enterprise-grade governance, and scalable analytics infrastructure.**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-blue?style=flat-square)](https://anaprec07.github.io/porygon-pipelines-dataform)
[![BigQuery](https://img.shields.io/badge/BigQuery-Optimized-4285F4?style=flat-square)](https://cloud.google.com/bigquery)
[![Dataform](https://img.shields.io/badge/Dataform-SQL--First-FF6B35?style=flat-square)](https://cloud.google.com/dataform)

## Executive Summary

This project solves the **critical business problem of data silos and delayed insights** by implementing a modern, cloud-native data pipeline that transforms raw e-commerce data into actionable business intelligence. Built with **Google Dataform**, **BigQuery**, **Storage** and **Looker Studio**, it delivers:

- **Centralized Single Source of Truth (SST)** removing data fragmentation and enabling faster time-to-insight through automated, real-time data processing and self-service analytics.
- **Data accuracy** through comprehensive data quality frameworks ensuring data consistency and providing clarity on data lineage.
- **Efficient operations** through reduced cost due to its server-less architecture. It removes scalability bottle-necks through to its modular pipeline design and star schema data model.
---

## The Need Addressed
Before this implementation, the e-commerce company with name **The Look E-commerce** faced the below issues:

- **Data fragmentation** across multiple systems.
- **Manual, error-prone ETL processes** that delay decision-making.
- **Lack of standardization and clarity on data lineage** creating compliance and trust issues.
- **Scalability bottlenecks** as data volumes grew exponentially.


---

## Technology Stack Rationale

I decided to build this solution using Google due my familiarity with its ecosystem and its significant advancements in AI technologies. The google resources I chose to build this solution are: 

| Product | Description | Decision Factor | 
|--------|------------|------------|
| **BigQuery** | Serverless data warehouse for storing and querying structured data at petabyte scale using SQL. |Performative, Scalable, Cost-efficient, Seamless integration, Supports analytics | 
| **Dataform** | A data transformation and orchestration tool built specifically for SQL-based pipelines in BigQuery.| Git version-control through git, Data-lineage clarity,  Data Quality Checks and Unit-Testing Integrations, Works directly in BigQuery without the need of additional infrastructure. |
| **Looker studio** | Business intelligence (BI) and visualization tool that connects directly to BigQuery and other data sources | Seamless BigQuery integration, Supports real time updates. |
| **Cloud Storage** | A secure, scalable object storage system for raw and semi-processed data (CSV, Parquet, JSON, logs, etc.). | Seamless integration with BigQuery external tables, Cost efficient. |

---

## Data Model

```mermaid
erDiagram
    %% Tables
    trx_fct {
        INTEGER order_id PK
        INTEGER product_id PK
        INTEGER inventory_item_id PK
        INTEGER user_id
        STRING order_status
        DATE date
        STRING product_brand
        STRING product_category
        INTEGER user_age
        STRING user_gender
        STRING user_country
        STRING iso_abbreviation
        NUMERIC sale_price
        NUMERIC product_cost
        NUMERIC gross_profit
        TIMESTAMP processing_timestamp
    }

    inventory_dim {
        INTEGER inventory_item_id PK
        DATE date_created
        DATE date_sold
        TIMESTAMP processing_timestamp
    }

    events_fct {
        INTEGER event_id PK
        INTEGER user_id
        INTEGER sequence_number
        INTEGER session_id
        DATE date_created
        STRING traffic_source
        STRING uri
        STRING event_type
        TIMESTAMP processing_timestamp
    }

    orders_dim {
        INTEGER order_id PK
        STRING status
        DATE date_created
        DATE date_returned
        DATE date_shipped
        DATE date_delivered
        INTEGER num_of_item
        TIME order_processing_time
        TIME order_transit_time
        TIME order_lead_time
        TIMESTAMP processing_timestamp
    }

    products_dim {
        INTEGER product_id PK
        NUMERIC cost
        STRING category
        STRING brand
        NUMERIC retail_price
        NUMERIC markup
        STRING department
        TIMESTAMP processing_timestamp
    }

    users_dim {
        INTEGER user_id PK
        INTEGER age
        STRING gender
        STRING country
        STRING traffic_source
        DATE date_created
        STRING iso_abbreviation
        TIMESTAMP processing_timestamp
    }

    %% Relationships
    trx_fct ||--|| orders_dim : "order_id"
    trx_fct ||--|| products_dim : "product_id"
    trx_fct ||--|| inventory_dim : "inventory_item_id"
    trx_fct ||--|| users_dim : "user_id"
    events_fct ||--|| users_dim : "user_id"

```

---

## Total Cost of Ownership (TCO)

Based on current consumption, I estimate this project to cost a maximum of $13 per month.

## Business Intelligence Dashboards

### 1. Executive Summary Dashboard
[View Dashboard](https://lookerstudio.google.com/embed/reporting/224a01ba-2006-4fc4-91ba-c20807589a23/page/Gg3)  

### 2. Profit Matrix per Category Dashboard
[View Dashboard](https://lookerstudio.google.com/embed/reporting/224a01ba-2006-4fc4-91ba-c20807589a23/page/p_4gtrw0g7wd)  


// includes/docs.js

// global constants
const order_id = `A unique identifier for an order.`;
const user_id = `A unique identifier for a user.`;
const product_id = `A unique identifier for a product.`;
const traffic_source = `The source of the traffic (e.g., 'Organic', 'Email').`;
const date_created = `The timestamp when the row values were created.`;
const processing_timestamp = `The timestamp when the row was processed.`;
const date = `The date of the record.`

// event constants
const event_id = `A unique identifier for an event.`;
const session_id = `A unique identifier for a session.`;
const sequence_number = `A sequence number for ordering events within a session.`;
const event_type = `The type of event (e.g., 'cancel', 'purchase').`;
const uri = `The URI associated with the event`;

// inventory items constants
const inventory_items_id = `A unique identifier for an inventory item`;
const sold_at = `The timestamp when the item was sold.`;
const product_distribution_center_id = `The ID of the distribution center for the product.`;


// order constants
const status = `The status of the order (e.g., 'completed', 'canceled').`;
const date_returned = `The timestamp when the order was returned.`;
const date_shipped = `The timestamp when the order was shipped.`;
const date_delivered = `The timestamp when the order was delivered.`;
const num_of_item = `The number of items in the order.`;
const order_processing_time = `The time taken to process the order in hours. Calculated as date_shipped minus date_created.`;
const order_transit_time = `The time taken for the order to be delivered in hours. Calculated as date_delivered minus date_shipped.`;
const order_lead_time = `The total time from order creation to delivery in hours. Calculated as date_delivered minus date_created.`;

// product constants
const cost = `The cost of the product in USD.`;
const category = `The category of the product (e.g., 'Apparel', 'Accessories').`;
const brand = `The brand of the product.`;
const retail_price = `The retail price of the product in USD.`;
const markup = `The markup amount for the product, calculated as retail_price minus cost.`;
const department = `The department of the product (e.g., 'Clothing', 'Footwear').`;

// user constants
const age = `The age of a user.`;
const gender = `The gender of a user (e.g., 'M', 'F').`;
const user_country = `The country of the user (e.g., 'USA', 'CAN').`;
const user_segment = `The segment of the user as per defined in config table.`;
const user_market = `The market of the user as per defined in config table.`;
const iso_abbreviation = `The ISO abbreviation for the user's country.`;

// order_items constants
const sale_price = `The sale price of the item in USD.`;

// profit_view constants
const revenue = `The total revenue generated from sales in USD.`;
const cogs = `The cost of goods sold in USD.`;
const gross_profit = `The gross profit calculated as revenue minus cost of goods sold in USD.`;

// profit_matrix_view constants
const profit_ytd = `The year-to-date profit in USD.`;
const profit_last_ytd = `The profit for the curreent year-to-date period last year in USD.`;

module.exports = {
   order_id,
   user_id,
   product_id,
   traffic_source,
   date_created,
   processing_timestamp,
   date,
   event_id,
   session_id,
   sequence_number,
   event_type,
   uri,
   inventory_items_id,
   sold_at,
   product_distribution_center_id,
   status,
   date_returned,
   date_shipped,
   date_delivered,
   num_of_item,
   order_processing_time,
   order_transit_time,
   order_lead_time,
   cost,
   category,
   brand,
   retail_price,
   markup,
   department,
   age,
   gender,
   user_country,
   user_segment,
   user_market,
   iso_abbreviation,
   sale_price
};

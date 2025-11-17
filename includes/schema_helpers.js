// includes/schema_helpers.js

/**
 * Generates SELECT statement for day columns
 */
function selectDayColumns(startDay, endDay, prefix = 'd_', alias = null) {
  const columns = [];
  for (let i = startDay; i <= endDay; i++) {
    const colName = `${prefix}${i}`;
    columns.push(alias ? `${alias}.${colName}` : colName);
  }
  return columns.join(',\n    ');
}
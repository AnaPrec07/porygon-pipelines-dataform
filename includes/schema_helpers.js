// includes/schema_helpers.js

/**
 * Generates SELECT statement for day columns
 */
function selectDayColumns(startDay, endDay, prefix = 'd_') {
  const columns = [];
  for (let i = startDay; i <= endDay; i++) {
    const colName = `${prefix}${i}`;
    columns.push(`${colName} INTEGER`);
  }
  return columns.join(',\n    ');
}


module.exports = {
  selectDayColumns
};
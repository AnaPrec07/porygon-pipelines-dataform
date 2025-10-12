// include/assertions.js

/**
 * Common assertion for runtime/processed_at timestamp column
 * Ensures the timestamp is today's date.
 * @param {string} columnName - The timestamp column name (default: 'processed_at')
 * @returns {Object} Assertion configuration
 */
function runtimeTimestampAssertion(columnName = 'processed_at') {
  return {
    rowConditions: [
      `DATE(${columnName}) = CURRENT_DATE()`
    ]
  };
}

module.exports = {
  runtimeTimestampAssertion,
};
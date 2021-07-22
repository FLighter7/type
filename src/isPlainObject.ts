/**
 * What is "object" here? As we know, javascript objects are presented in different ways.
 * But in common, if we want to know that a value is an object or not
 * we want to know that the value is a plain object (like `{}`) or not
 */
/**
 * Checks that a value is a plain object (like `{}`)
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isPlainObject = (val: unknown): boolean => {
  // Type is not an object or a value is null
  // Note: `.toString(null) === [object Null]`, but `val === null` is faster, so let it be here
  if (typeof val !== 'object' || val === null) {
    return false;
  }

  // Check if a plain object
  return Object.prototype.toString.call(val) === '[object Object]' && val.constructor === Object;
};

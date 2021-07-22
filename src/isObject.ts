/**
 * Checks that a value is an object and not `null`
 *
 * *To check if an object is plain use `isPlainObject` function*
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isObject = (val: unknown): boolean => {
  return typeof val === 'object' && val !== null;
};

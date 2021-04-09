/**
 * Checks that a value is `RegExp`
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isRegExp = (val: unknown): boolean => val instanceof RegExp;

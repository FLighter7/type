/**
 * Checks that a value is `WeakMap`
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isWeakMap = (val: unknown): boolean => val instanceof WeakMap;

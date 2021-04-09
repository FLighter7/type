/**
 * Checks that a value is `WeakSet`
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isWeakSet = (val: unknown): boolean => val instanceof WeakSet;

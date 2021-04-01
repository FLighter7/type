/**
 * Checks that a value is `'NaN'` (as string)
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isStringifiedNan = (val: unknown): boolean => val === 'NaN';

/**
 * Checks that a value is `'true'` or `'false'` (as string)
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isStringifiedBoolean = (val: unknown): boolean => (val === 'true' || val === 'false');

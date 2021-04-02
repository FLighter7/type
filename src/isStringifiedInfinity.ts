const inf = 'Infinity';

/**
 * Checks that a value is `'Infinity'` or `'+Infinity'` or `'-Infinity'` (as string)
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isStringifiedInfinity = (val: unknown): boolean => val === inf || val === '+'+inf || val === '-'+inf;

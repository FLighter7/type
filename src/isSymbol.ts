/**
 * Checks that a value is `Symbol`
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isSymbol = (val: unknown): boolean => typeof val === 'symbol';

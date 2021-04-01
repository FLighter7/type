import {isStringifiedNull} from './isStringifiedNull.js';

/**
 * Checks that a value is `null`
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is `'null'` (as string)
 * @returns {boolean}
 */
export const isNull = (val: unknown, checkString = false): boolean => {
  return val === null || (checkString && isStringifiedNull(val));
};

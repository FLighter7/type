import {isStringifiedNan} from './isStringifiedNan.js';

/**
 * Checks that a value is `NaN`
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is `'NaN'` (as string)
 * @returns {boolean}
 */
export const isNan = (val: unknown, checkString = false): boolean => {
  return val !== val || (checkString && isStringifiedNan(val));
};

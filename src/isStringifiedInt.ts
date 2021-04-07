import {isStringifiedNumber} from './isStringifiedNumber.js';

/**
 * Checks that a value is a stringified integer number
 *
 * @param {unknown} val any value
 * @param {boolean} [emptyStringIsNumber = false] if `true` then an empty string or string with spaces only
 * are equal to number and the result for them is `true`
 * @returns {boolean}
 */
export const isStringifiedInt = (val: unknown, emptyStringIsNumber = false): boolean => {
  return isStringifiedNumber(val, emptyStringIsNumber) && Number.isInteger(+val);
};

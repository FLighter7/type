import {isStringifiedNumber} from './isStringifiedNumber.js';

/**
 * Checks that a value is a stringified finite number
 *
 * @param {unknown} val any value
 * @param {boolean} [emptyStringIsNumber = false] if `true` then an empty string or string with spaces only
 * are equal to number and the result for them is `true`
 * @returns {boolean}
 */
export const isStringifiedFiniteNumber = (val: unknown, emptyStringIsNumber = false): boolean => {
  return isStringifiedNumber(val, emptyStringIsNumber) && Number.isFinite(+val);
};

import {isNumber} from './isNumber.js';
import {isStringifiedFiniteNumber} from './isStringifiedFiniteNumber.js';

/**
 * Checks that a value is a finite number
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is a stringified finite number
 * @param {boolean} [emptyStringIsNumber = false] if `true` then an empty string or string with spaces only
 * are equal to number and the result for them is `true`
 * @returns {boolean}
 */
export const isFiniteNumber = (val: unknown, checkString = false, emptyStringIsNumber = false): boolean => {
  return (isNumber(val) && Number.isFinite(val))
    || (checkString && isStringifiedFiniteNumber(val, emptyStringIsNumber));
};

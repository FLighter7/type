import {_isNumber} from './_isNumber.js';
import {isStringifiedNumber} from './isStringifiedNumber.js';

/**
 * Checks that a value is number and not `NaN`
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is stringified number
 * @param {boolean} [emptyStringIsNumber = false] if `true` then an empty string or string with spaces only
 * are equal to number and the result for them is `true`
 * @returns {boolean}
 */
export const isNumber = (val: unknown, checkString = false, emptyStringIsNumber = false): boolean => {
  return _isNumber(val) || (checkString && isStringifiedNumber(val, emptyStringIsNumber));
};

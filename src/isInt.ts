import {isNumber} from './isNumber.js';
import {isStringifiedInt} from './isStringifiedInt.js';

/**
 * Checks that a value is an integer number
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is a stringified integer number
 * @param {boolean} [emptyStringIsNumber = false] if `true` then an empty string or string with spaces only
 * are equal to number and the result for them is `true`
 * @returns {boolean}
 */
export const isInt = (val: unknown, checkString = false, emptyStringIsNumber = false): boolean => {
  return (isNumber(val) && Number.isInteger(val)) || (checkString && isStringifiedInt(val, emptyStringIsNumber));
};

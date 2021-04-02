import {isNumber} from './isNumber.js';
import {isStringifiedPositiveNumber} from './isStringifiedPositiveNumber.js';

/**
 * Don't need `emptyStringIsNumber` because an empty string or a string with spaces === 0
 */
/**
 * Checks that a value is a number > 0
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is a stringified number > 0
 * @returns {boolean}
 */
export const isPositiveNumber = (val: unknown, checkString = false): boolean => {
  return (isNumber(val) && val > 0)
    || (checkString && isStringifiedPositiveNumber(val));
};

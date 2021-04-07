import {isFiniteNumber} from './isFiniteNumber.js';
import {isStringifiedFloat} from './isStringifiedFloat.js';

/**
 * Don't need `emptyStringIsNumber` because an empty string or a string with spaces === 0 (0 is integer)
 */
/**
 * Checks that a value is a float number
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is a stringified float number
 * @returns {boolean}
 */
export const isFloat = (val: unknown, checkString = false): boolean => {
  return (isFiniteNumber(val) && !Number.isInteger(val)) || (checkString && isStringifiedFloat(val));
};

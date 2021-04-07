import {isStringifiedFiniteNumber} from './isStringifiedFiniteNumber.js';

/**
 * Don't need `emptyStringIsNumber` because an empty string or a string with spaces === 0 (0 is integer)
 */
/**
 * Checks that a value is a stringified float number
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isStringifiedFloat = (val: unknown): boolean => {
  return isStringifiedFiniteNumber(val) && !Number.isInteger(+val);
};

import {isStringifiedNumber} from './isStringifiedNumber.js';

/**
 * Don't need `emptyStringIsNumber` because an empty string or a string with spaces === 0
 */
/**
 * Checks that a value is a stringified number < 0
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isStringifiedNegativeNumber = (val: unknown): boolean => {
  return isStringifiedNumber(val) && +val < 0;
};

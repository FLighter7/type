import {isStringifiedFiniteNumber} from './isStringifiedFiniteNumber.js';

/**
 * Don't need `emptyStringIsNumber` because an empty string or a string with spaces === 0
 *
 * Why `isStringifiedFiniteNumber`, not `isStringifiedNegativeNumber`?
 * Because `+val < 0` is shorter than `Number.isFinite(+val)`
 */
/**
 * Checks that a value is a stringified finite number < 0
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isStringifiedNegativeFiniteNumber = (val: unknown): boolean => {
  return isStringifiedFiniteNumber(val) && +val < 0;
};

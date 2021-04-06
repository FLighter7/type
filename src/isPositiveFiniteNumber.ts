import {isFiniteNumber} from './isFiniteNumber.js';
import {isStringifiedPositiveFiniteNumber} from './isStringifiedPositiveFiniteNumber.js';

/**
 * Don't need `emptyStringIsNumber` because an empty string or a string with spaces === 0
 *
 * Why `isFiniteNumber`, not `isPositiveNumber`?
 * Because `+val > 0` is shorter than `Number.isFinite(+val)`
 */
/**
 * Checks that a value is a finite number > 0
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is a stringified finite number > 0
 * @returns {boolean}
 */
export const isPositiveFiniteNumber = (val: unknown, checkString = false): boolean => {
  return (isFiniteNumber(val) && val > 0)
    || (checkString && isStringifiedPositiveFiniteNumber(val));
};

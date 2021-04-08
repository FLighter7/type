import {isString} from './isString.js';

/**
 * Checks that a value is a stringified big integer
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isStringifiedBigInt = (val: unknown): boolean => {
  if (!isString(val)) {
    return false;
  }

  try {
    const n = BigInt(val);
    return n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER;
  } catch (e) {
    return false;
  }
};

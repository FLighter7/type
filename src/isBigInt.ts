import {getType} from './getType.js';
import {isStringifiedBigInt} from './isStringifiedBigInt.js';

/**
 * Checks that a value is a big integer
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is a stringified big integer
 * @returns {boolean}
 */
export const isBigInt = (val: unknown, checkString = false): boolean => {
  return getType(val) === 'bigint' || (checkString && isStringifiedBigInt(val));
};

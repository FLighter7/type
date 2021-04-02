import {getType} from './getType.js';
import {isStringifiedBoolean} from './isStringifiedBoolean.js';

/**
 * Checks that a value is `true` or `false`
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is `'true'` or `'false'` (as string)
 * @returns {boolean}
 */
export const isBoolean = (val: unknown, checkString = false): boolean => {
  return getType(val) === 'boolean' || (checkString && isStringifiedBoolean(val));
};

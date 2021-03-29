import {getType} from './getType.js';
import {isStringifiedUndefined} from './isStringifiedUndefined.js';

/**
 * typeof undefined === 'undefined'
 * is faster than
 * undefined === undefined
 */
/**
 * Checks that a value is `undefined`
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is `'undefined'` (as string)
 * @returns {boolean}
 */
export const isUndefined = (val: unknown, checkString = false): boolean => {
  return getType(val) === 'undefined' || (checkString && isStringifiedUndefined(val));
};

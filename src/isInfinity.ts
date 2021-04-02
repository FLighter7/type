import {isStringifiedInfinity} from './isStringifiedInfinity.js';

/**
 * Checks that a value is `Infinity` or `-Infinity`
 *
 * @param {unknown} val any value
 * @param {boolean} [checkString = false] also check if a value is `'Infinity'` or `'+Infinity'`
 * or `'-Infinity'` (as string)
 * @returns {boolean}
 */
export const isInfinity = (val: unknown, checkString = false): boolean => {
  return (val === Infinity || val === -Infinity) || (checkString && isStringifiedInfinity(val));
};

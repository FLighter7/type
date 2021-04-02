import {isString} from './isString.js';
import {_isNumber} from './_isNumber.js';

/**
 * +value === Number(value)
 * @see https://stackoverflow.com/a/17106702/8165331
 */
/**
 * Checks that a value is stringified number
 *
 * @param {unknown} val any value
 * @param {boolean} [emptyStringIsNumber = false] if `true` then an empty string or string with spaces only
 * are equal to number and the result for them is `true`
 * @returns {boolean}
 */
export const isStringifiedNumber = (val: unknown, emptyStringIsNumber = false): boolean => {
  if (!isString(val)) {
    return false;
  }

  if (emptyStringIsNumber) {
    return _isNumber(+val);
  }

  const trimmed = (val as string).trim();
  return trimmed.length > 0 && _isNumber(+trimmed);
};

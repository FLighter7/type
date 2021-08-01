/**
 * +value === Number(value)
 * @see https://stackoverflow.com/a/17106702/8165331
 */

import {_isSuitable, FlagsType} from './_isSuitable.js';
import {TypeFlags} from './flags.js';

/**
 * Inner function: checks that a value is number and not `NaN`
 *
 * @param {unknown} val
 * @returns {boolean}
 */
const _isNumber = (val: unknown): boolean => typeof val === 'number' && val === val;

/**
 * Checks that a value is number and not `NaN`
 *
 * Note: `new Number` **is not** a number, it's an object
 *
 * @param {unknown} val any value
 * @param {FlagsType} [flags] CHECK_STRING, CHECK_STRING_CASE_INSENSITIVE, NUMBER_*
 * @param {boolean} [emptyStringIsNumber = false] if `true` then an empty string or string with spaces only
 * are equal to number and the result for them is `true`
 * @returns {boolean}
 */
export const isNumber = (val: unknown, flags?: FlagsType, emptyStringIsNumber = false): boolean => {
  let preliminaryResult = _isNumber(val);

  // This condition is faster than in _isSuitable
  if (!flags) {
    return preliminaryResult;
  }

  // Flags to array
  const flagsArray = Array.isArray(flags) ? flags : [flags];

  // Check as string
  const indexString = flagsArray.indexOf(TypeFlags.CHECK_STRING);
  const indexStringInsensitive = flagsArray.indexOf(TypeFlags.CHECK_STRING_CASE_INSENSITIVE);
  if (indexString >= 0 || indexStringInsensitive >= 0) {
    if (typeof val !== 'string') {
      return false;
    }

    // Trim spaces
    if (!emptyStringIsNumber) {
      val = val.trim();
      if ((val as string).length === 0) {
        return false;
      }
    }

    // Special case for case insensitive "infinity"
    const indexInfinity = flagsArray.indexOf(TypeFlags.NUMBER_INFINITE);
    if (indexStringInsensitive >= 0 && indexInfinity >= 0) {
      if (/^[+-]?infinity$/i.test(val as string)) {
        val = (val as string).toLowerCase().replace(/i/, 'I');
        delete flagsArray[indexInfinity];
      } else {
        return false;
      }
    }

    val = +val;
    preliminaryResult = _isNumber(val);

    // Do not change the length of flags array
    (indexString >= 0) && (delete flagsArray[indexString]);
    (indexStringInsensitive >= 0) && (delete flagsArray[indexStringInsensitive]);
  }

  return _isSuitable(preliminaryResult, val, flagsArray);
};

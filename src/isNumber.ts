/**
 * +value === Number(value)
 * @see https://stackoverflow.com/a/17106702/8165331
 */

import {_isSuitable, FlagsType} from './_isSuitable.js';
import {_getCommonFlags} from './_getCommonFlags.js';
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
 * @param {FlagsType} [flags] CHECK_STRING, CHECK_STRING_CASE_INSENSITIVE, OR, NUMBER_*
 * @param {boolean} [emptyStringIsNumber = false] if `true` then an empty string or string with spaces only
 * are equal to number and the result for them is `true`
 * @returns {boolean}
 */
export const isNumber = (val: unknown, flags?: FlagsType, emptyStringIsNumber = false): boolean => {
  const preliminaryResult = _isNumber(val);

  // This condition is faster than in _isSuitable
  if (!flags) {
    return preliminaryResult;
  }

  // Flags to array
  flags = Array.isArray(flags) ? flags : [flags];

  // Has CHECK_STRING, CHECK_STRING_CASE_INSENSITIVE, OR
  const [, hasStringInsensitive, hasCheckString, hasOr] = _getCommonFlags(flags);

  /**
   * 4 cases:
   * 1. has check string, has or
   * 2. has check string, has not or
   * 3. has not check string, has or
   * 4. has not check string, has not or
   *
   * *If it has not check string then "OR" doesn't matter
   */
  // Check as string
  let isNeededString = false;
  if (hasCheckString && typeof val === 'string') {
    // Trim spaces
    if (!emptyStringIsNumber) {
      val = val.trim();
    }

    // Special case for case insensitive "infinity"
    const indexInfinity = flags.indexOf(TypeFlags.NUMBER_INFINITE);
    if (hasStringInsensitive && indexInfinity >= 0) {
      if (/^[+-]?infinity$/i.test(val as string)) {
        val = (val as string).toLowerCase().replace(/i/, 'I');
        isNeededString = true;
        delete flags[indexInfinity];
      }
    } else {
      val = +val;
      isNeededString = _isNumber(val);
    }
  }

  if (
    // 1
    (hasCheckString && hasOr && !preliminaryResult && !isNeededString)
    // 2 - preliminary result doesn't matter, check string only
    || (hasCheckString && !hasOr && !isNeededString)
    // 3, 4 - if the result is false then return it (do not check any other flags)
    || (!hasCheckString && !preliminaryResult)
  ) {
    return false;
  }

  return _isSuitable(true, val, flags);
};

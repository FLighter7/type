import {FlagsType, _isSuitable} from './_isSuitable.js';
import {_getCommonFlags} from './_getCommonFlags.js';

/**
 * Checks that a value is a big integer
 *
 * @param {unknown} val any value
 * @param {FlagsType} [flags] CHECK_STRING, CHECK_STRING_CASE_INSENSITIVE, OR, NUMBER_*
 * @returns {boolean}
 */
export const isBigInt = (val: unknown, flags?: FlagsType): boolean => {
  const preliminaryResult = typeof val === 'bigint';

  // This condition is faster than in _isSuitable
  if (!flags) {
    return preliminaryResult;
  }

  // Flags to array
  flags = Array.isArray(flags) ? flags : [flags];

  // Has CHECK_STRING, CHECK_STRING_CASE_INSENSITIVE, OR
  const [, , hasCheckString, hasOr] = _getCommonFlags(flags);

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
    try {
      val = BigInt(val);
      isNeededString = val > Number.MAX_SAFE_INTEGER || val < Number.MIN_SAFE_INTEGER;
    } catch (e) {
      // Useless comment for eslint
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

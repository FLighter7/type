import {FlagsType} from './_isSuitable.js';
import {TypeFlags} from './flags.js';

/**
 * Checks that a value is a big integer
 *
 * @param {unknown} val any value
 * @param {FlagsType} [flags] CHECK_STRING or CHECK_STRING_CASE_INSENSITIVE
 * @returns {boolean}
 */
export const isBigInt = (val: unknown, flags?: FlagsType): boolean => {
  const preliminaryResult = typeof val === 'bigint';

  // This condition is faster than in _isSuitable
  if (!flags) {
    return preliminaryResult;
  }

  // Flags to array
  const flagsArray = Array.isArray(flags) ? flags : [flags];

  // As string
  if (
    flagsArray.includes(TypeFlags.CHECK_STRING)
    || flagsArray.includes(TypeFlags.CHECK_STRING_CASE_INSENSITIVE)
  ) {
    if (typeof val !== 'string') {
      return false;
    }

    try {
      const n = BigInt(val);
      return n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER;
    } catch (e) {
      return false;
    }
  }

  return preliminaryResult;
};

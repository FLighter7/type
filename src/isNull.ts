import {_isSuitable, FlagsType} from './_isSuitable.js';

const n = 'null';

/**
 * Checks that a value is `null` or `'null'` (as string)
 *
 * @param {unknown} val any value
 * @param {FlagsType} [flags] CHECK_STRING or CHECK_STRING_CASE_INSENSITIVE
 * @returns {boolean}
 */
export const isNull = (val: unknown, flags?: FlagsType): boolean => {
  const preliminaryResult = val === null;

  // This condition is faster than in _isSuitable
  if (!flags) {
    return preliminaryResult;
  }

  return _isSuitable(preliminaryResult, val, flags, n);
};

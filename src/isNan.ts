import {_isSuitable, FlagsType} from './_isSuitable.js';

const n = 'NaN';

/**
 * Checks that a value is `NaN` or `'NaN'` (as string)
 *
 * @param {unknown} val any value
 * @param {FlagsType} [flags] CHECK_STRING, CHECK_STRING_CASE_INSENSITIVE, OR
 * @returns {boolean}
 */
export const isNan = (val: unknown, flags?: FlagsType): boolean => {
  const preliminaryResult = val !== val;

  // This condition is faster than in _isSuitable
  if (!flags) {
    return preliminaryResult;
  }

  return _isSuitable(preliminaryResult, val, flags, n);
};

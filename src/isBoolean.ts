import {_isSuitable, FlagsType} from './_isSuitable.js';

const rightCases = ['true', 'false'];

/**
 * Checks that a value is `true | false` or `'true' | 'false'` (as string)
 *
 * @param {unknown} val any value
 * @param {FlagsType} [flags] CHECK_STRING, CHECK_STRING_CASE_INSENSITIVE, OR
 * @returns {boolean}
 */
export const isBoolean = (val: unknown, flags?: FlagsType): boolean => {
  const preliminaryResult = typeof val === 'boolean';

  // This condition is faster than in _isSuitable
  if (!flags) {
    return preliminaryResult;
  }

  return _isSuitable(preliminaryResult, val, flags, rightCases);
};

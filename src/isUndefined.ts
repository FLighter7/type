import {_isSuitable, FlagsType} from './_isSuitable.js';

const u = 'undefined';

/**
 * Checks that a value is `undefined` or `'undefined'` (as string)
 *
 * @param {unknown} val any value
 * @param {FlagsType} [flags] CHECK_STRING or CHECK_STRING_CASE_INSENSITIVE
 * @returns {boolean}
 */
export const isUndefined = (val: unknown, flags?: FlagsType): boolean => {
  /**
   * typeof undefined === 'undefined'
   * is faster than
   * undefined === undefined
   */
  const preliminaryResult = typeof val === u;

  // This condition is faster than in _isSuitable
  if (!flags) {
    return preliminaryResult;
  }

  return _isSuitable({
    preliminaryResult,
    val,
    flags,
    rightCases: u,
  });
};

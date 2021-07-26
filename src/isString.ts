import {_isSuitable, FlagsType} from './_isSuitable.js';

/**
 * Checks that a value is string
 *
 * Note: `new String` **is not** a string, it's an object
 *
 * @param {unknown} val any value
 * @param {FlagsType} [flags] STRING_*
 * @returns {boolean}
 */
export const isString = (val: unknown, flags?: FlagsType): boolean => {
  const preliminaryResult = typeof val === 'string';

  // This condition is faster than in _isSuitable
  if (!flags) {
    return preliminaryResult;
  }

  return _isSuitable(preliminaryResult, val, flags);
};

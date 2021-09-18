/**
 * @file Common flags finder
 */

import {FunctionsKey, TypeFlags} from './flags.js';

/**
 * Returns the presence of flags: CHECK_STRING, CHECK_STRING_CASE_INSENSITIVE, OR
 * and delete them from the source array
 *
 * @param {FunctionsKey[]} flags
 * @returns {boolean[]}
 */
export const _getCommonFlags = (flags: FunctionsKey[]): boolean[] => {
  let hasString = false;
  let hasStringInsensitive = false;
  let hasCheckString = false;
  let hasOr = false;

  for (let i = 0; i < flags.length; i++) {
    const flag = flags[i];

    if (!hasString && flag === TypeFlags.CHECK_STRING) {
      hasString = true;
      delete flags[i];
    } else if (!hasStringInsensitive && flag === TypeFlags.CHECK_STRING_CASE_INSENSITIVE) {
      hasStringInsensitive = true;
      delete flags[i];
    } else if (!hasOr && flag === TypeFlags.OR) {
      hasOr = true;
      delete flags[i];
    }

    hasCheckString = hasString || hasStringInsensitive;
    if (hasCheckString && hasOr) {
      break;
    }
  }

  return [hasString, hasStringInsensitive, hasCheckString, hasOr];
};

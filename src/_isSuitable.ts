/**
 * @file Flags checker
 */

import {Functions, TypeFlags, FunctionsKey} from './flags.js';
import {_getCommonFlags} from './_getCommonFlags.js';

// Export this type here to avoid two imports in other files
export type FlagsType = FunctionsKey | FunctionsKey[];

export const _isSuitable = (
    preliminaryResult: boolean,
    val: unknown,
    flags: FlagsType,
    rightCases?: string | string[]
): boolean => {
  // No flags - just return the result
  if (!flags) {
    return preliminaryResult;
  }

  // Flags to array
  flags = Array.isArray(flags) ? flags : [flags];

  // Has CHECK_STRING, CHECK_STRING_CASE_INSENSITIVE, OR
  const [hasString, , hasCheckString, hasOr] = _getCommonFlags(flags);

  /**
   * 4 cases:
   * 1. has check string, has or
   * 2. has check string, has not or
   * 3. has not check string, has or
   * 4. has not check string, has not or
   *
   * *If it has not check string then "OR" doesn't matter
   */
  // Right cases to array and check as string
  let isNeededString = false;
  if (hasCheckString) {
    rightCases = Array.isArray(rightCases) ? rightCases : [rightCases];
    isNeededString = hasString
      ? Functions[TypeFlags.CHECK_STRING](val, rightCases)
      : Functions[TypeFlags.CHECK_STRING_CASE_INSENSITIVE](val, rightCases);
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

  // 1 - the result or string result is true then check other flags
  // 2 - the string result is true then check other flags
  // 3, 4 - the result is true then check other flags
  for (const flag of flags) {
    const f = Functions[flag] as (val: unknown) => boolean;
    // Invalid flag
    if (!f) {
      continue;
    }

    const valid = f(val);
    if (!valid) {
      return false;
    }
  }

  return true;
};

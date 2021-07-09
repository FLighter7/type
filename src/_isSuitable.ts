/**
 * @file Flags checker
 */

import {Functions, FunctionsKeys, FunctionsKey} from './flags.js';

// Export this type here to avoid two imports in other files
export type FlagsType = FunctionsKey | FunctionsKey[];

type isSuitable = {
  preliminaryResult: boolean,
  val: unknown,
  flags: FlagsType,
  rightCases?: string | string[],
};

export const _isSuitable = ({preliminaryResult, val, flags, rightCases}: isSuitable): boolean => {
  // No flags - just return the result
  if (!flags) {
    return preliminaryResult;
  }

  // Flags to array
  flags = Array.isArray(flags) ? flags : [flags];

  // If the result is false and we don't have flags for checking strings
  if (!preliminaryResult
    && !flags.includes(FunctionsKeys.CHECK_STRING)
    && !flags.includes(FunctionsKeys.CHECK_STRING_CASE_INSENSITIVE)
  ) {
    return false;
  }

  // The result is true and we need to check flags
  // Or
  // The result is false, but we have to check string cases
  rightCases = Array.isArray(rightCases) ? rightCases : [rightCases];
  for (const flag of flags) {
    const f = Functions[flag] as (val: unknown, rightCases: string[]) => boolean;
    // Invalid flag
    if (!f) {
      continue;
    }

    const valid = f(val, rightCases);
    if (!valid) {
      return false;
    }
  }

  return true;
};

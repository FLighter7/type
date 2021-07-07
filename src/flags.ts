/**
 * @file Flags
 */

// Functions
const Functions = {
  // Common
  // Case sensitive
  CHECK_STRING: (v: unknown, rightCases: string[]): boolean => typeof v === 'string' && rightCases.includes(v),
  // Case insensitive
  CHECK_STRING_CASE_INSENSITIVE: (v: unknown, rightCases: string[]): boolean => {
    if (typeof v !== 'string') {
      return false;
    }
    v = v.toLowerCase();
    return rightCases.find(c => c.toLowerCase() === v) !== undefined;
  },

  // String
  STRING_EMPTY:      (v: string): boolean => v.length === 0,    // '' - an empty string
  STRING_NOT_EMPTY:  (v: string): boolean => v.length > 0,      // !'' - not an empty string
  STRING_LETTER:     (v: string): boolean => /^[a-z]$/i.test(v),// one letter from the English alphabet
  STRING_ONE_SYMBOL: (v: string): boolean => v.length === 1,    // any one stringified symbol

  // Number
  NUMBER_INT:      (v: number): boolean => Number.isInteger(v),// integer
  NUMBER_FLOAT:    (v: number): boolean => Number.isFinite(v) && !Number.isInteger(v),// float
  NUMBER_FINITE:   (v: number): boolean => Number.isFinite(v),// not -Infinity, +Infinity, NaN
  NUMBER_INFINITE: (v: number): boolean => v === Infinity || v === -Infinity,// -Infinity, +Infinity
  NUMBER_NEGATIVE: (v: number): boolean => v < 0,  // < 0
  NUMBER_ZERO:     (v: number): boolean => v === 0,// === 0
  NUMBER_POSITIVE: (v: number): boolean => v > 0,  // > 0
};

// "Enum"
type createEnumType<T> = {[K in keyof T]: K};
type FunctionsEnum = createEnumType<typeof Functions>;
type FunctionsKey  = keyof FunctionsEnum;

const FunctionsKeys = {} as FunctionsEnum;
for (const key of Object.keys(Functions)) {
  FunctionsKeys[key] = key;
}

export {
  Functions,
  FunctionsKeys,
  FunctionsEnum,
  FunctionsKey,
}

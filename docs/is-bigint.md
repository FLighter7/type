### isBigInt

[More about flags](flags.md)

```js
/*
isBigInt(val: unknown, flags?: FlagsType): boolean
*/

/**
 * Checks that a value is a big integer
 * Numbers as string must be more than Number.MAX_SAFE_INTEGER or less than Number.MIN_SAFE_INTEGER to be a big integer
 */

// Examples
isBigInt(10n);// true
isBigInt(BigInt(10));// true
isBigInt(10n, [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isBigInt(10n, [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// true
isBigInt(10);// false
isBigInt(10n, TypeFlags.CHECK_STRING);// false
isBigInt(10n, TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// false

isBigInt(String(Number.MAX_SAFE_INTEGER + 1), TypeFlags.CHECK_STRING);// true
isBigInt(String(Number.MAX_SAFE_INTEGER + 1), TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true
isBigInt(String(Number.MAX_SAFE_INTEGER + 1), [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isBigInt(String(Number.MAX_SAFE_INTEGER + 1), [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// true
isBigInt(String(Number.MIN_SAFE_INTEGER - 1), TypeFlags.CHECK_STRING);// true
isBigInt(String(Number.MIN_SAFE_INTEGER - 1), TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true
isBigInt(String(Number.MIN_SAFE_INTEGER - 1), [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isBigInt(String(Number.MIN_SAFE_INTEGER - 1), [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// true
isBigInt(String(Number.MAX_SAFE_INTEGER + 1));// false
isBigInt(String(Number.MIN_SAFE_INTEGER - 1));// false
isBigInt('10');// false
isBigInt('10', TypeFlags.CHECK_STRING);// false
isBigInt('10', TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// false
isBigInt('10', [TypeFlags.OR, TypeFlags.CHECK_STRING]);// false
isBigInt('10', [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// false
```

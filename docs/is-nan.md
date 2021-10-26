### isNan

[More about flags](flags.md)

```js
/*
isNan(val: unknown, flags?: FlagsType): boolean
*/

/**
 * Checks that a value is NaN or "NaN" (as string)
 */

// Examples
isNan(NaN);// true
isNan(NaN, [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isNan('NaN', TypeFlags.CHECK_STRING);// true
isNan('nan', TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true
isNan('NaN', [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isNan('nan', [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// true
isNan(NaN, TypeFlags.CHECK_STRING);// false
isNan(NaN, TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// false
isNan('NaN');// false
isNan('nan', TypeFlags.CHECK_STRING);// false
```

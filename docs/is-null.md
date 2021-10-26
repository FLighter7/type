### isNull

[More about flags](flags.md)

```js
/*
isNull(val: unknown, flags?: FlagsType): boolean
*/

/**
 * Checks that a value is null or "null" (as string)
 */

// Examples
isNull(null);// true
isNull(null, [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isNull('null', TypeFlags.CHECK_STRING);// true
isNull('NULL', TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true
isNull('null', [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isNull('NULL', [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// true
isNull(null, TypeFlags.CHECK_STRING);// false
isNull(null, TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// false
isNull('null');// false
isNull('NULL', TypeFlags.CHECK_STRING);// false
```

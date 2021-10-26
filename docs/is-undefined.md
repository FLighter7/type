### isUndefined

[More about flags](flags.md)

```js
/*
isUndefined(val: unknown, flags?: FlagsType): boolean
*/

/**
 * Checks that a value is undefined or "undefined" (as string)
 */

// Examples
isUndefined(undefined);// true
isUndefined(undefined, [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isUndefined('undefined', TypeFlags.CHECK_STRING);// true
isUndefined('UNDEFINED', TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true
isUndefined('UnDeFiNeD', TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true
isUndefined('undefined', [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isUndefined('UNDEFINED', [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// true
isUndefined(undefined, TypeFlags.CHECK_STRING);// false
isUndefined(undefined, TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// false
isUndefined('undefined');// false
isUndefined('UNDEFINED', TypeFlags.CHECK_STRING);// false
```

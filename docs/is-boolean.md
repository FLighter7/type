### isBoolean

[More about flags](flags.md)

```js
/*
isBoolean(val: unknown, flags?: FlagsType): boolean
*/

/**
 * Checks that a value is true | false or "true" | "false" (as string)
 */

// Examples
isBoolean(true);// true
isBoolean(false);// true
isBoolean(true, [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isBoolean(false, [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isBoolean(new Boolean());// false
isBoolean(true, TypeFlags.CHECK_STRING);// false
isBoolean(false, TypeFlags.CHECK_STRING);// false

isBoolean('true', TypeFlags.CHECK_STRING);// true
isBoolean('TRUE', TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true
isBoolean('True', TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true
isBoolean('false', TypeFlags.CHECK_STRING);// true
isBoolean('FALSE', TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true
isBoolean('False', TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true
isBoolean('true', [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isBoolean('TRUE', [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// true
isBoolean('True', [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// true
isBoolean('false', [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true
isBoolean('FALSE', [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// true
isBoolean('False', [TypeFlags.OR, TypeFlags.CHECK_STRING_CASE_INSENSITIVE]);// true
isBoolean('true');// false
isBoolean('TRUE', TypeFlags.CHECK_STRING);// false
```

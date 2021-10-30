### isString

[More about flags](flags.md)

```js
/*
isString(val: unknown, flags?: FlagsType): boolean
*/

/**
 * Checks that a value is string
 * Available flags: TypeFlags.STRING_*
 *
 * Note: "new String" is not a string, it's an object
 */

// Examples
isString('');// true
isString('', TypeFlags.STRING_EMPTY);// true
isString(String(''));// true
isString(String(''), TypeFlags.STRING_EMPTY);// true
isString('string');// true
isString('string', TypeFlags.STRING_NOT_EMPTY);// true
isString(String('string'));// true
isString(String('string'), TypeFlags.STRING_NOT_EMPTY);// true
isString('  ', TypeFlags.STRING_NOT_EMPTY);// true
isString('[]');// true
isString('[]', TypeFlags.STRING_JSON);// true
isString('{}');// true
isString('{}', TypeFlags.STRING_JSON);// true
isString('""');// true
isString('""', TypeFlags.STRING_JSON);// true
isString('null', TypeFlags.STRING_JSON);// true

isString(new String(''));// false
isString('  ', TypeFlags.STRING_EMPTY);// false
isString('', TypeFlags.STRING_NOT_EMPTY);// false
isString('', TypeFlags.STRING_JSON);// false
isString('undefined', TypeFlags.STRING_JSON);// false
```

### Flags

Use flags for flexible control over the values you need to filter.

Variable (enum): `TypeFlags`, it's type: `FlagsType`. To use a single flag, just pass it as an argument to the function. To use multiple flags, pass an array of flags as an argument to the function.

**Initialization:**
```js
import {TypeFlags} from '@flighter/type';
// or
const {TypeFlags} = require('@flighter/type/umd/index.cjs');
```

#### Common flags

Apply them in any function that supports the argument `flags?: FlagsType`.

| Flag | Description |
| --- | --- |
| CHECK_STRING | Enables **case sensitive** string check. It means that a function will search for a **string** that matches the conditions of the function. |
| CHECK_STRING_CASE_INSENSITIVE | Enables **case insensitive** string check. It means that a function will search for a **string** that matches the conditions of the function. |
| OR | Use this with CHECK_STRING or CHECK_STRING_CASE_INSENSITIVE. Allows searching for the original value or a string. Returns `true` if one of the conditions (original value found OR stringified value found) is `true`. Doesn't affect other flags. |

Examples:
```js
isNull(null);// true

isNull(null, TypeFlags.CHECK_STRING);// false, search for a string
isNull('null', TypeFlags.CHECK_STRING);// true, it's a string
isNull(null, [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true, search for a string or null
isNull('null', [TypeFlags.OR, TypeFlags.CHECK_STRING]);// true, search for a string or null

isNull('NULL', TypeFlags.CHECK_STRING);// false, case sensitive
isNull('NULL', TypeFlags.CHECK_STRING_CASE_INSENSITIVE);// true, case insensitive
```


#### String flags

Apply them in the `isString` function.

| Flag | Description |
| --- | --- |
| STRING_EMPTY | Leaves only an empty string (=== '') |
| STRING_NOT_EMPTY | Leaves only not an empty string (!== '') |
| STRING_LETTER | Leaves only string that has one letter from the English alphabet (case insensitive) |
| STRING_ONE_SYMBOL | Leaves only string that has any one stringified symbol (string.length === 1) |
| STRING_JSON | Leaves only string that is a valid JSON string |

Examples:
```js
isString('');// true

isString('', TypeFlags.STRING_EMPTY);// true
isString('', TypeFlags.STRING_NOT_EMPTY);// false
isString('foo', TypeFlags.STRING_NOT_EMPTY);// true
isString(' ', TypeFlags.STRING_NOT_EMPTY);// true

isString('z', TypeFlags.STRING_LETTER);// true
isString('ю', TypeFlags.STRING_LETTER);// false
isString('4', TypeFlags.STRING_LETTER);// false

isString('z', TypeFlags.STRING_ONE_SYMBOL);// true
isString('ю', TypeFlags.STRING_ONE_SYMBOL);// true
isString('4', TypeFlags.STRING_ONE_SYMBOL);// true

isString('null', TypeFlags.STRING_JSON);// true
isString('""', TypeFlags.STRING_JSON);// true
isString('[]', TypeFlags.STRING_JSON);// true
isString('{}', TypeFlags.STRING_JSON);// true
isString('4', TypeFlags.STRING_JSON);// true
isString('undefined', TypeFlags.STRING_JSON);// false
```


#### Number flags

Apply them in the `isNumber` function.

| Flag | Description |
| --- | --- |
| NUMBER_INT | Leaves only integer |
| NUMBER_FLOAT | Leaves only float |
| NUMBER_FINITE | Leaves only finite number (not Infinity, -Infinity, +Infinity, NaN) |
| NUMBER_INFINITE | Leaves only infinity number (Infinity, -Infinity, +Infinity) |
| NUMBER_NEGATIVE | Leaves only negative number (< 0) |
| NUMBER_ZERO | Leaves only zero (=== 0) |
| NUMBER_POSITIVE | Leaves only positive number (> 0) |

Examples:
```js
isNumber(1);// true

isNumber(1, TypeFlags.NUMBER_INT);// true
isNumber(1, TypeFlags.NUMBER_FLOAT);// false
isNumber(1.24, TypeFlags.NUMBER_FLOAT);// true
isNumber(1.24, TypeFlags.NUMBER_INT);// false

isNumber(1.24, TypeFlags.NUMBER_FINITE);// true
isNumber(1.24, TypeFlags.NUMBER_INFINITE);// false
isNumber(Infinity, TypeFlags.NUMBER_INFINITE);// true

isNumber(-1, TypeFlags.NUMBER_NEGATIVE);// true
isNumber(1, TypeFlags.NUMBER_POSITIVE);// true
isNumber(0, TypeFlags.NUMBER_ZERO);// true

isNumber('1.24', [TypeFlags.CHECK_STRING, TypeFlags.NUMBER_FLOAT]);// true
isNumber(1.24, [TypeFlags.CHECK_STRING, TypeFlags.NUMBER_FLOAT]);// false, search for a string
isNumber(1.24, [TypeFlags.OR, TypeFlags.CHECK_STRING, TypeFlags.NUMBER_FLOAT]);// true
```

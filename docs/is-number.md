### isNumber

[More about flags](flags.md)

```js
/*
isNumber(val: unknown, flags?: FlagsType, emptyStringIsNumber = false): boolean
*/

/**
 * Checks that a value is number and not NaN
 * Available flags: TypeFlags.CHECK_STRING, TypeFlags.CHECK_STRING_CASE_INSENSITIVE, TypeFlags.OR, TypeFlags.NUMBER_*
 *
 * If "emptyStringIsNumber" is "true" then an empty string or string with spaces only
 * are equal to number and the result for them is "true"
 *
 * Note: "new Number" is not a number, it's an object
 */

// Examples
import {isNumber, TypeFlags} from '@flighter/type';

const {
  CHECK_STRING,
  CHECK_STRING_CASE_INSENSITIVE,
  NUMBER_INT,
  NUMBER_FLOAT,
  NUMBER_FINITE,
  NUMBER_INFINITE,
  NUMBER_NEGATIVE,
  NUMBER_POSITIVE,
} = TypeFlags;

isNumber(0);// true
isNumber(-1);// true
isNumber(1);// true
isNumber(-1.24);// true
isNumber(1.24);// true
isNumber(Infinity);// true
isNumber(-Infinity);// true
isNumber('0', CHECK_STRING);// true
isNumber('-1', CHECK_STRING);// true
isNumber('1', CHECK_STRING);// true
isNumber('-1.24', CHECK_STRING);// true
isNumber('1.24', CHECK_STRING);// true
isNumber('Infinity', CHECK_STRING);// true
isNumber('+Infinity', CHECK_STRING);// true
isNumber('-Infinity', CHECK_STRING);// true
isNumber('infinity', CHECK_STRING_CASE_INSENSITIVE);// true
isNumber(0, NUMBER_INT);// true
isNumber(-1, [NUMBER_FINITE, NUMBER_NEGATIVE]);// true
isNumber('1.24', [CHECK_STRING, NUMBER_FLOAT, NUMBER_POSITIVE]);// true
isNumber('-infinity', [CHECK_STRING_CASE_INSENSITIVE, NUMBER_INFINITE, NUMBER_NEGATIVE]);// true
isNumber('  ', CHECK_STRING, true);// true

isNumber(NaN);// false
isNumber(new Number());// false
isNumber(0, CHECK_STRING);// false
isNumber('  ', CHECK_STRING);// false
isNumber(1, NUMBER_FLOAT);// false
isNumber(-1.24, NUMBER_INT);// false
isNumber(-1.24, [NUMBER_FLOAT, NUMBER_POSITIVE]);// false
isNumber(Infinity, NUMBER_FINITE);// false
isNumber('1');// false
isNumber('Infinity', [CHECK_STRING, NUMBER_INT]);// false
isNumber('Infinity', [CHECK_STRING, NUMBER_FLOAT]);// false
```

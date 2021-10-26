### isRegExp

```js
/*
isRegExp(val: unknown): boolean
*/

/**
 * Checks that a value is a RegExp instance
 * Uses "val instanceof RegExp" comparison
 */

// Examples
isRegExp(/something/);// true
isRegExp(new RegExp('something'));// true
isRegExp('/something/');// false
```

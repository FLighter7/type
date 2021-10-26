### isObject

```js
/*
isObject(val: unknown): boolean
*/

/**
 * Checks that a value has a type "object" and is not null
 * Uses "typeof val === 'object' && val !== null" comparison
 *
 * To check if an object is plain use "isPlainObject" function
 */

// Examples
isObject({});// true
isObject(new Object());// true
isObject(Object.create(null));// true
isObject(new Date());// true
isObject([]);// true
isObject(null);// false
```

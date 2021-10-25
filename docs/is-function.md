### isFunction

```js
/*
isFunction(val: unknown): boolean
*/

/**
 * Checks that a value is function
 */

// Examples
isFunction(() => {});// true
isFunction(function(){});// true
isFunction(new Function());// true
isFunction(class{});// true
```

### isPlainObject

```js
/*
isPlainObject(val: unknown): boolean
*/

/**
 * Checks that a value is a plain object (like "{}")
 *
 * What is "object" here? As we know, javascript objects are presented in different ways.
 * But in common, if we want to know that a value is an object or not
 * we want to know that the value is a plain object (like "{}") or not
 *
 * To simple check if an object has a type "object" and it is not null use "isObject" function
 */

// Examples
isPlainObject({});// true
isPlainObject({foo: 'foo', {bar: 'bar'}});// true
isPlainObject(new Object());// true
isPlainObject(Object.create({}));// true
isPlainObject({
  hasOwnProperty: () => false,
  isPrototypeOf: () => false,
});// true
isPlainObject({
  hasOwnProperty: () => true,
  isPrototypeOf: () => true,
});// true
isPlainObject({
  hasOwnProperty: false,
  isPrototypeOf: false,
});// true
isPlainObject(Object.prototype);// true
isPlainObject({constructor: Object});// true
isPlainObject({prototype: 'string'});// true

isPlainObject(new Date());// false
isPlainObject(Array.prototype);// false
isPlainObject(class {});// false
isPlainObject(new class {});// false
isPlainObject(class Foo {});// false
isPlainObject( (() => {
  class Foo{}
  return new Foo();
})() );// false
isPlainObject( (() => {
  class Foo{}
  class Bar extends Foo{}
  return Bar;
})() );// false
isPlainObject( (() => {
  class Foo{}
  class Bar extends Foo{}
  return new Bar();
})() );// false
isPlainObject(Object.create(null));// false
isPlainObject(new class extends Object {});// false
isPlainObject({constructor: Array});// false
isPlainObject({constructor: 'string'});// false
```

### getStrictType

```js
/*
type TypeofStrictType = 'number' | 'nan'
                      | 'string' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'function'
                      | 'null' | 'object' | 'plainobject'
                      | 'notfound'// not found type
                      | string;// other object types (map, set, weakmap, weakset, array, date, regexp, error, ...)

getStrictType(val: unknown): TypeofStrictType
*/

/**
 * Return a strict type of the value
 *
 * - All types are lowercased
 * - Primitives created by new <String|Number|Boolean>() are objects
 * - If a type is not found, the "notfound" type returns (no error)
 */

// Examples
getStrictType(undefined);     // undefined
getStrictType(null);          // null
getStrictType(NaN);           // nan

getStrictType('str');         // string
getStrictType(0);             // number
getStrictType(true);          // boolean
getStrictType(10n);           // bigint
getStrictType(Symbol());      // symbol

getStrictType([]);            // array
getStrictType(new Date());    // date
getStrictType(/regexp/);      // regexp
getStrictType(new RegExp());  // regexp
getStrictType(new Error());   // error
getStrictType(Error());       // error

getStrictType({});            // plainobject

getStrictType(() => {});      // function
getStrictType(new Function());// function
getStrictType(class {});      // function
getStrictType(Error);         // function

getStrictType(new class {});  // object
getStrictType(new Boolean()); // object
getStrictType(new String());  // object
getStrictType(new Number());  // object

getStrictType(new Map());     // map
getStrictType(new Set());     // set
getStrictType(new WeakMap()); // weakmap
getStrictType(new WeakSet()); // weakset
```

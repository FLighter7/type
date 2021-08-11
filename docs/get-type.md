### getType

```js
// What for?
// ¯\_(ツ)_/¯ Maybe you don't want to use "typeof" operator

/*
type TypeofType = 'string' | 'number'
                | 'bigint' | 'boolean'
                | 'symbol' | 'undefined'
                | 'object' | 'function';

getType(val: unknown): TypeofType
*/

/**
 * Return the type using "typeof" operator
 */

// Examples
getType(undefined);// undefined
getType(0);        // number
getType(NaN);      // number
getType(true);     // boolean
getType('str');    // string
getType(() => {}); // function
getType(Symbol()); // symbol
getType(10n);      // bigint
getType([]);       // object
getType({});       // object
```

# Type

### About
One more library for defining types. The library is exported as a non-minified ESM. It also has a rollback UMD version.

### Install
```
npm i @flighter/type -d
```
Or
```
yarn add @flighter/type
```

### Download
[ES Next minified (3 KB)](download/type.min.js)

## Initialization
```js
// ESM
import * as Type from '@flighter/type';
import {<function name>} from '@flighter/type';// recommended
import {<function name>} from '@flighter/type/esm/index.js';
import {<function name>} from '@flighter/type/esm/<function name>.js';

// UMD
const Type = require('@flighter/type/umd/index.cjs');
const {<function name>} = require('@flighter/type/umd/index.cjs');
const {<function name>} = require('@flighter/type/umd/<function name>.cjs');
```

## API

- [FlagsType](docs/flags.md)
---
- [getType(val: unknown): string](docs/get-type.md)
- [getStrictType(val: unknown): string](docs/get-strict-type.md)
- [isUndefined(val: unknown, flags?: FlagsType): boolean](docs/is-undefined.md)
- [isNull(val: unknown, flags?: FlagsType): boolean](docs/is-null.md)
- [isNan(val: unknown, flags?: FlagsType): boolean](docs/is-nan.md)
- [isString(val: unknown, flags?: FlagsType): boolean](docs/is-string.md)
- [isNumber(val: unknown, flags?: FlagsType, emptyStringIsNumber?: boolean = false): boolean](docs/is-number.md)
- [isBoolean(val: unknown, flags?: FlagsType): boolean](docs/is-boolean.md)
- [isSymbol(val: unknown): boolean](docs/is-symbol.md)
- [isBigInt(val: unknown, flags?: FlagsType): boolean](docs/is-bigint.md)
- [isFunction(val: unknown): boolean](docs/is-function.md)
- [isObject(val: unknown): boolean](docs/is-object.md)
- [isPlainObject(val: unknown): boolean](docs/is-plain-object.md)
- [isArray(val: unknown): boolean](docs/is-array.md)
- [isDate(val: unknown): boolean](docs/is-date.md)
- [isRegExp(val: unknown): boolean](docs/is-regexp.md)
- [isMap(val: unknown): boolean](docs/is-map.md)
- [isSet(val: unknown): boolean](docs/is-set.md)
- [isWeakMap(val: unknown): boolean](docs/is-weak-map.md)
- [isWeakSet(val: unknown): boolean](docs/is-weak-set.md)

## License
[MIT](LICENSE)

## Changelog
[The latest updates](CHANGELOG.md)

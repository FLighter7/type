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

**Note:** Some note about flags

- [getType(val: unknown): string](docs/get-type.md)
- [getStrictType(val: unknown): string](docs/get-strict-type.md)
- [isUndefined(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isNull(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isNaN(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isString(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isNumber(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isBoolean(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isSymbol(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isBigInt(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isFunction(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isObject(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isPlainObject(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isArray(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isDate(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isRegExp(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isMap(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isSet(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isWeakMap(val: unknown, flags?: FlagsType): boolean](docs/function.md)
- [isWeakSet(val: unknown, flags?: FlagsType): boolean](docs/function.md)

## License
[MIT](LICENSE)

## Changelog
[The latest updates](CHANGELOG.md)

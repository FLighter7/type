import * as Type from '../umd';

export default <Exclude<keyof typeof Type, 'TypeFlags'>[]>[
  'getType',
  'getStrictType',
  'isUndefined',
  'isNull',
  'isSymbol',
  'isNan',
  'isBoolean',
  'isString',
  'isFunction',
  'isNumber',
  'isBigInt',
  'isArray',
  'isRegExp',
  'isMap',
  'isSet',
  'isWeakMap',
  'isWeakSet',
  'isPlainObject',
  'isObject',
  'isDate',
];

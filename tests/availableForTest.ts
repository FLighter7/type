import * as Type from '../umd';

export default <(keyof typeof Type)[]>[
  'getType',
  'isUndefined',
  'isStringifiedUndefined',
  'isNull',
  'isStringifiedNull',
  'isSymbol',
];

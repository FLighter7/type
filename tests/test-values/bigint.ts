import {Value} from './value';

export const BigIntValues: Value[] = [
  {
    value: BigInt(Number.MAX_SAFE_INTEGER + 1),
    type: 'bigint',
    strictType: 'bigint',
    passableFunctions: ['isBigInt'],
  },
  {
    value: String(Number.MAX_SAFE_INTEGER + 1),
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      'isStringifiedNumber',
      ['isNumber', true],
      'isStringifiedInt',
      ['isInt', true],
      'isStringifiedFiniteNumber',
      ['isFiniteNumber', true],
      'isStringifiedPositiveNumber',
      ['isPositiveNumber', true],
      'isStringifiedPositiveFiniteNumber',
      ['isPositiveFiniteNumber', true],
      'isStringifiedBigInt',
      ['isBigInt', true],
      'isJsonString',
    ],
  },
]

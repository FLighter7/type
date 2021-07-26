import {Value} from './value';

export const BigIntValues: Value[] = [
  {
    value: 10n,
    type: 'bigint',
    passableFunctions: ['isBigInt'],
  },
  {
    value: BigInt(Number.MAX_SAFE_INTEGER + 1),
    type: 'bigint',
    passableFunctions: ['isBigInt'],
  },
  {
    value: String(Number.MAX_SAFE_INTEGER + 1),
    passableFunctions: [
      'isString',
      ['isBigInt', 'CHECK_STRING'],
      ['isBigInt', 'CHECK_STRING_CASE_INSENSITIVE'],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INT']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_POSITIVE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE', 'NUMBER_POSITIVE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INT', 'NUMBER_FINITE', 'NUMBER_POSITIVE']],
    ],
  },
]

import {Value} from './value';

export const NullValues: Value[] = [
  {
    value: null,
    type: 'object',
    strictType: 'null',
    passableFunctions: ['isNull'],
  },
  {
    value: 'null',
    passableFunctions: [
      ['isNull', 'CHECK_STRING'],
      ['isNull', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
  {
    value: 'NULL',
    passableFunctions: [
      ['isNull', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
  {
    value: 'Null',
    passableFunctions: [
      ['isNull', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
]

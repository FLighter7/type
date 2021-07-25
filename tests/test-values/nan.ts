import {Value} from './value';

export const NanValues: Value[] = [
  {
    value: NaN,
    type: 'number',
    strictType: 'nan',
    passableFunctions: ['isNan'],
  },
  {
    value: 'NaN',
    passableFunctions: [
      ['isNan', 'CHECK_STRING'],
      ['isNan', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
  {
    value: 'NAN',
    passableFunctions: [
      ['isNan', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
  {
    value: 'nan',
    passableFunctions: [
      ['isNan', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
]

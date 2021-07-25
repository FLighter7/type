import {Value} from './value';

export const UndefinedValues: Value[] = [
  {
    value: undefined,
    type: 'undefined',
    passableFunctions: ['isUndefined'],
  },
  {
    value: 'undefined',
    passableFunctions: [
      ['isUndefined', 'CHECK_STRING'],
      ['isUndefined', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
  {
    value: 'UNDEFINED',
    passableFunctions: [
      ['isUndefined', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
]

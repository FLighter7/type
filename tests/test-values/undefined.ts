import {Value} from './value';

export const UndefinedValues: Value[] = [
  {
    value: undefined,
    type: 'undefined',
    strictType: 'undefined',
    passableFunctions: ['isUndefined'],
  },
  {
    value: 'undefined',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      ['isUndefined', 'CHECK_STRING'],
      ['isUndefined', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
  {
    value: 'UNDEFINED',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      ['isUndefined', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
]

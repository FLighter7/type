import {Value} from './value';

export const BooleanValues: Value[] = [
  {
    value: true,
    type: 'boolean',
    passableFunctions: ['isBoolean'],
  },
  {
    value: false,
    type: 'boolean',
    passableFunctions: ['isBoolean'],
  },
  {
    value: new Boolean(),
    type: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: 'true',
    passableFunctions: [
      ['isBoolean', 'CHECK_STRING'],
      ['isBoolean', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
      ['isString', 'STRING_JSON'],
    ],
  },
  {
    value: 'false',
    passableFunctions: [
      ['isBoolean', 'CHECK_STRING'],
      ['isBoolean', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
      ['isString', 'STRING_JSON'],
    ],
  },
  {
    value: 'TRUE',
    passableFunctions: [
      ['isBoolean', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
  {
    value: 'FALSE',
    passableFunctions: [
      ['isBoolean', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
  {
    value: 'True',
    passableFunctions: [
      ['isBoolean', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
  {
    value: 'False',
    passableFunctions: [
      ['isBoolean', 'CHECK_STRING_CASE_INSENSITIVE'],
      'isString',
    ],
  },
]

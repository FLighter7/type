import {Value} from './value';

export const StringValues: Value[] = [
  {
    value: '',
    passableFunctions: [
      'isString',
      ['isString', 'STRING_EMPTY'],
      ['isNumber', 'CHECK_STRING', true],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE', true],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE'], true],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INT'], true],
    ],
  },
  {
    value: String(''),
    passableFunctions: [
      'isString',
      ['isString', 'STRING_EMPTY'],
      ['isNumber', 'CHECK_STRING', true],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE', true],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE'], true],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INT'], true],
    ],
  },
  {
    value: new String(''),
    type: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: 'string',
    passableFunctions: [
      'isString',
      ['isString', 'STRING_NOT_EMPTY'],
    ],
  },
  {
    value: String('string'),
    passableFunctions: [
      'isString',
      ['isString', 'STRING_NOT_EMPTY'],
    ],
  },
  {
    value: new String('string'),
    type: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: '  ',
    passableFunctions: [
      'isString',
      ['isString', 'STRING_NOT_EMPTY'],
      ['isNumber', 'CHECK_STRING', true],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE', true],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE'], true],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INT'], true],
    ],
  },
  {
    value: String('  '),
    passableFunctions: [
      'isString',
      ['isString', 'STRING_NOT_EMPTY'],
      ['isNumber', 'CHECK_STRING', true],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE', true],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE'], true],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INT'], true],
    ],
  },
  {
    value: '[]',
    passableFunctions: [
      'isString',
      ['isString', 'STRING_NOT_EMPTY'],
      ['isString', 'STRING_JSON'],
    ],
  },
  {
    value: '{}',
    passableFunctions: [
      'isString',
      ['isString', 'STRING_NOT_EMPTY'],
      ['isString', 'STRING_JSON'],
    ],
  },
  {
    value: '""',
    passableFunctions: [
      'isString',
      ['isString', 'STRING_NOT_EMPTY'],
      ['isString', 'STRING_JSON'],
    ],
  },
]

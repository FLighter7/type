import {Value} from './value';

export const NumberValues: Value[] = [
  /**
   * As number
   */
  {
    value: 0,
    type: 'number',
    passableFunctions: [
      'isNumber',
      ['isNumber', 'NUMBER_FINITE'],
      ['isNumber', 'NUMBER_INT'],
      ['isNumber', 'NUMBER_ZERO'],
    ],
  },
  {
    value: -1,
    type: 'number',
    passableFunctions: [
      'isNumber',
      ['isNumber', 'NUMBER_FINITE'],
      ['isNumber', 'NUMBER_NEGATIVE'],
      ['isNumber', ['NUMBER_FINITE', 'NUMBER_NEGATIVE']],
      ['isNumber', 'NUMBER_INT'],
    ],
  },
  {
    value: 1,
    type: 'number',
    passableFunctions: [
      'isNumber',
      ['isNumber', 'NUMBER_FINITE'],
      ['isNumber', 'NUMBER_POSITIVE'],
      ['isNumber', ['NUMBER_FINITE', 'NUMBER_POSITIVE']],
      ['isNumber', 'NUMBER_INT'],
    ],
  },
  {
    value: -1.24,
    type: 'number',
    passableFunctions: [
      'isNumber',
      ['isNumber', 'NUMBER_FINITE'],
      ['isNumber', 'NUMBER_NEGATIVE'],
      ['isNumber', ['NUMBER_FINITE', 'NUMBER_NEGATIVE']],
      ['isNumber', 'NUMBER_FLOAT'],
    ],
  },
  {
    value: 1.24,
    type: 'number',
    passableFunctions: [
      'isNumber',
      ['isNumber', 'NUMBER_FINITE'],
      ['isNumber', 'NUMBER_POSITIVE'],
      ['isNumber', ['NUMBER_FINITE', 'NUMBER_POSITIVE']],
      ['isNumber', 'NUMBER_FLOAT'],
    ],
  },
  {
    value: Infinity,
    type: 'number',
    passableFunctions: [
      'isNumber',
      ['isNumber', 'NUMBER_INFINITE'],
      ['isNumber', 'NUMBER_POSITIVE'],
    ],
  },
  {
    value: -Infinity,
    type: 'number',
    passableFunctions: [
      'isNumber',
      ['isNumber', 'NUMBER_INFINITE'],
      ['isNumber', 'NUMBER_NEGATIVE'],
    ],
  },

  /**
   * As object
   */
  {
    value: new Number(),
    type: 'object',
    passableFunctions: ['isObject'],
  },

  /**
   * As string
   */
  {
    value: '0',
    passableFunctions: [
      'isString',
      ['isNumber', 'CHECK_STRING'],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE'],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INT']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_ZERO']],
      ['isString', 'STRING_JSON'],
    ],
  },
  {
    value: '-1',
    passableFunctions: [
      'isString',
      ['isNumber', 'CHECK_STRING'],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE'],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_NEGATIVE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE', 'NUMBER_NEGATIVE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INT']],
      ['isString', 'STRING_JSON'],
    ],
  },
  {
    value: '1',
    passableFunctions: [
      'isString',
      ['isNumber', 'CHECK_STRING'],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE'],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_POSITIVE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE', 'NUMBER_POSITIVE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INT']],
      ['isString', 'STRING_JSON'],
    ],
  },
  {
    value: '-1.24',
    passableFunctions: [
      'isString',
      ['isNumber', 'CHECK_STRING'],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE'],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_NEGATIVE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE', 'NUMBER_NEGATIVE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FLOAT']],
      ['isString', 'STRING_JSON'],
    ],
  },
  {
    value: '1.24',
    passableFunctions: [
      'isString',
      ['isNumber', 'CHECK_STRING'],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE'],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_POSITIVE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FINITE', 'NUMBER_POSITIVE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_FLOAT']],
      ['isString', 'STRING_JSON'],
    ],
  },
  {
    value: 'Infinity',
    passableFunctions: [
      'isString',
      ['isNumber', 'CHECK_STRING'],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE'],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INFINITE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_POSITIVE']],
    ],
  },
  {
    value: '+Infinity',
    passableFunctions: [
      'isString',
      ['isNumber', 'CHECK_STRING'],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE'],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INFINITE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_POSITIVE']],
    ],
  },
  {
    value: '-Infinity',
    passableFunctions: [
      'isString',
      ['isNumber', 'CHECK_STRING'],
      ['isNumber', 'CHECK_STRING_CASE_INSENSITIVE'],
      ['isNumber', ['CHECK_STRING', 'NUMBER_INFINITE']],
      ['isNumber', ['CHECK_STRING', 'NUMBER_NEGATIVE']],
    ],
  },
]

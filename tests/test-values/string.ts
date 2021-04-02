import {Value} from './value';

export const StringValues: Value[] = [
  {
    value: '',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      ['isStringifiedNumber', true],
      ['isNumber', true, true],
    ],
  },
  {
    value: String(''),
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      ['isStringifiedNumber', true],
      ['isNumber', true, true],
    ],
  },
  {
    value: new String(''),
    type: 'object',
    strictType: 'object',
    passableFunctions: [],
  },
  {
    value: 'string',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
    ],
  },
  {
    value: String('string'),
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
    ],
  },
  {
    value: new String('string'),
    type: 'object',
    strictType: 'object',
    passableFunctions: [],
  },
  {
    value: '  ',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      ['isStringifiedNumber', true],
      ['isNumber', true, true],
    ],
  },
  {
    value: String('  '),
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      ['isStringifiedNumber', true],
      ['isNumber', true, true],
    ],
  },
]

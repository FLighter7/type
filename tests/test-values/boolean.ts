import {Value} from './value';

export const BooleanValues: Value[] = [
  {
    value: true,
    type: 'boolean',
    strictType: 'boolean',
    passableFunctions: ['isBoolean'],
  },
  {
    value: false,
    type: 'boolean',
    strictType: 'boolean',
    passableFunctions: ['isBoolean'],
  },
  {
    value: 'true',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isStringifiedBoolean',
      ['isBoolean', true],
      'isString',
      'isJsonString',
    ],
  },
  {
    value: 'false',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isStringifiedBoolean',
      ['isBoolean', true],
      'isString',
      'isJsonString',
    ],
  },
  {
    value: new Boolean(),
    type: 'object',
    strictType: 'object',
    passableFunctions: ['isObject'],
  },
]

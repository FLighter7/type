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
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isStringifiedNull',
      ['isNull', true],
      'isString',
      'isJsonString',
    ],
  },
]

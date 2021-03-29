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
      'isStringifiedUndefined',
      ['isUndefined', true],
    ],
  },
]

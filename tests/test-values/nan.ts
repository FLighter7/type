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
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isStringifiedNan',
      ['isNan', true],
      'isString',
    ],
  },
]

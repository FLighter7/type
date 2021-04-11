import {Value} from './value';

export const ArrayValues: Value[] = [
  {
    value: [],
    type: 'object',
    strictType: 'array',
    passableFunctions: [
      'isArray',
      'isObject',
    ],
  },
  {
    value: new Array(),
    type: 'object',
    strictType: 'array',
    passableFunctions: [
      'isArray',
      'isObject',
    ],
  },
  {
    value: [1, 2, 3],
    type: 'object',
    strictType: 'array',
    passableFunctions: [
      'isArray',
      'isObject',
    ],
  },
  {
    value: ['1', '2', '3'],
    type: 'object',
    strictType: 'array',
    passableFunctions: [
      'isArray',
      'isObject',
    ],
  },
  {
    value: [true, false],
    type: 'object',
    strictType: 'array',
    passableFunctions: [
      'isArray',
      'isObject',
    ],
  },
]

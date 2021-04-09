import {Value} from './value';

export const ArrayValues: Value[] = [
  {
    value: [],
    type: 'object',
    strictType: 'array',
    passableFunctions: ['isArray'],
  },
  {
    value: new Array(),
    type: 'object',
    strictType: 'array',
    passableFunctions: ['isArray'],
  },
  {
    value: [1, 2, 3],
    type: 'object',
    strictType: 'array',
    passableFunctions: ['isArray'],
  },
  {
    value: ['1', '2', '3'],
    type: 'object',
    strictType: 'array',
    passableFunctions: ['isArray'],
  },
  {
    value: [true, false],
    type: 'object',
    strictType: 'array',
    passableFunctions: ['isArray'],
  },
]

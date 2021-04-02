import {Value} from './value';

export const RegExpValues: Value[] = [
  {
    value: /RegExp/,
    type: 'object',
    strictType: 'regexp',
    passableFunctions: [],
  },
  {
    value: '/RegExp/',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
    ],
  },
  {
    value: new RegExp('RegExp'),
    type: 'object',
    strictType: 'regexp',
    passableFunctions: [],
  },
  {
    value: '/RegExp/i',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
    ],
  },
  {
    value: '/RegExp/gim',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
    ],
  },
]

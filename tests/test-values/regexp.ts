import {Value} from './value';

export const RegExpValues: Value[] = [
  {
    value: /RegExp/,
    type: 'object',
    strictType: 'regexp',
    passableFunctions: [
      'isRegExp',
      'isObject',
    ],
  },
  {
    value: '/RegExp/',
    passableFunctions: [
      'isString',
    ],
  },
  {
    value: new RegExp('RegExp'),
    type: 'object',
    strictType: 'regexp',
    passableFunctions: [
      'isRegExp',
      'isObject',
    ],
  },
  {
    value: '/RegExp/i',
    passableFunctions: [
      'isString',
    ],
  },
  {
    value: '/RegExp/gim',
    passableFunctions: [
      'isString',
    ],
  },
]

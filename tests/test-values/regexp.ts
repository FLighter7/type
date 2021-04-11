import {Value} from './value';

export const RegExpValues: Value[] = [
  {
    value: /RegExp/,
    type: 'object',
    strictType: 'regexp',
    passableFunctions: ['isRegExp'],
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
    passableFunctions: [
      'isRegExp',
      'isObject',
    ],
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

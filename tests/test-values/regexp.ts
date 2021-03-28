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
    passableFunctions: [],
  },
  {
    value: new RegExp('RegExp'),
    type: 'object',
    strictType: 'regexp',
    passableFunctions: [],
  },
]

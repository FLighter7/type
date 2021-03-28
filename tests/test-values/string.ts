import {Value} from './value';

export const StringValues: Value[] = [
  {
    value: '',
    type: 'string',
    strictType: 'string',
    passableFunctions: [],
  },
  {
    value: String(''),
    type: 'string',
    strictType: 'string',
    passableFunctions: [],
  },
  {
    value: new String(''),
    type: 'object',
    strictType: 'object',
    passableFunctions: [],
  },
  {
    value: 'string',
    type: 'string',
    strictType: 'string',
    passableFunctions: [],
  },
  {
    value: String('string'),
    type: 'string',
    strictType: 'string',
    passableFunctions: [],
  },
  {
    value: new String('string'),
    type: 'object',
    strictType: 'object',
    passableFunctions: [],
  },
]

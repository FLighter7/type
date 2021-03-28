import {Value} from './value';

export const BooleanValues: Value[] = [
  {
    value: true,
    type: 'boolean',
    strictType: 'boolean',
    passableFunctions: [],
  },
  {
    value: false,
    type: 'boolean',
    strictType: 'boolean',
    passableFunctions: [],
  },
  {
    value: 'true',
    type: 'string',
    strictType: 'string',
    passableFunctions: [],
  },
  {
    value: 'false',
    type: 'string',
    strictType: 'string',
    passableFunctions: [],
  },
  {
    value: new Boolean(),
    type: 'object',
    strictType: 'object',
    passableFunctions: [],
  },
]

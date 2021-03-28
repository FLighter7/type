import {Value} from './value';

export const NullValues: Value[] = [
  {
    value: null,
    type: 'object',
    strictType: 'null',
    passableFunctions: [],
  },
  {
    value: 'null',
    type: 'string',
    strictType: 'string',
    passableFunctions: [],
  },
]

import {Value} from './value';

export const FunctionValues: Value[] = [
  {
    value: () => {},
    type: 'function',
    passableFunctions: ['isFunction'],
  },
  {
    value: function(){},
    type: 'function',
    passableFunctions: ['isFunction'],
  },
  {
    value: new Function(),
    type: 'function',
    passableFunctions: ['isFunction'],
  },
  {
    value: class{},
    type: 'function',
    passableFunctions: ['isFunction'],
  },
]

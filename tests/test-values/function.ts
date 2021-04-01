import {Value} from './value';

export const FunctionValues: Value[] = [
  {
    value: () => {},
    type: 'function',
    strictType: 'function',
    passableFunctions: ['isFunction'],
  },
  {
    value: function(){},
    type: 'function',
    strictType: 'function',
    passableFunctions: ['isFunction'],
  },
  {
    value: new Function(),
    type: 'function',
    strictType: 'function',
    passableFunctions: ['isFunction'],
  },
  {
    value: class{},
    type: 'function',
    strictType: 'function',
    passableFunctions: ['isFunction'],
  },
]

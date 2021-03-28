import {Value} from './value';

export const FunctionValues: Value[] = [
  {
    value: () => {},
    type: 'function',
    strictType: 'function',
    passableFunctions: [],
  },
  {
    value: function(){},
    type: 'function',
    strictType: 'function',
    passableFunctions: [],
  },
  {
    value: new Function(),
    type: 'function',
    strictType: 'function',
    passableFunctions: [],
  },
]

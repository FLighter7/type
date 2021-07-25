import {Value} from './value';

export const SymbolValues: Value[] = [
  {
    value: Symbol(),
    type: 'symbol',
    passableFunctions: ['isSymbol'],
  },
]

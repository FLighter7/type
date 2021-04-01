import {Value} from './value';

export const SymbolValues: Value[] = [
  {
    value: Symbol(),
    type: 'symbol',
    strictType: 'symbol',
    passableFunctions: ['isSymbol'],
  },
]

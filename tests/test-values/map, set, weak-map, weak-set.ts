import {Value} from './value';

export const MapSetValues: Value[] = [
  {
    value: new Map(),
    type: 'object',
    strictType: 'map',
    passableFunctions: ['isMap'],
  },
  {
    value: new Set(),
    type: 'object',
    strictType: 'set',
    passableFunctions: ['isSet'],
  },
  {
    value: new WeakMap(),
    type: 'object',
    strictType: 'weakmap',
    passableFunctions: ['isWeakMap'],
  },
  {
    value: new WeakSet(),
    type: 'object',
    strictType: 'weakset',
    passableFunctions: ['isWeakSet'],
  },
]

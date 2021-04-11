import {Value} from './value';

export const MapSetValues: Value[] = [
  {
    value: new Map(),
    type: 'object',
    strictType: 'map',
    passableFunctions: [
      'isMap',
      'isObject',
    ],
  },
  {
    value: new Set(),
    type: 'object',
    strictType: 'set',
    passableFunctions: [
      'isSet',
      'isObject',
    ],
  },
  {
    value: new WeakMap(),
    type: 'object',
    strictType: 'weakmap',
    passableFunctions: [
      'isWeakMap',
      'isObject',
    ],
  },
  {
    value: new WeakSet(),
    type: 'object',
    strictType: 'weakset',
    passableFunctions: [
      'isWeakSet',
      'isObject',
    ],
  },
]

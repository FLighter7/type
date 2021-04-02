import {Value} from './value';

export const NumberValues: Value[] = [
  {
    value: 0,
    type: 'number',
    strictType: 'number',
    passableFunctions: [
      'isNumber',
      'isFiniteNumber',
    ],
  },
  {
    value: -1,
    type: 'number',
    strictType: 'number',
    passableFunctions: [
      'isNumber',
      'isFiniteNumber',
    ],
  },
  {
    value: 1,
    type: 'number',
    strictType: 'number',
    passableFunctions: [
      'isNumber',
      'isFiniteNumber',
    ],
  },
  {
    value: -1.24,
    type: 'number',
    strictType: 'number',
    passableFunctions: [
      'isNumber',
      'isFiniteNumber',
    ],
  },
  {
    value: 1.24,
    type: 'number',
    strictType: 'number',
    passableFunctions: [
      'isNumber',
      'isFiniteNumber',
    ],
  },
  {
    value: Infinity,
    type: 'number',
    strictType: 'number',
    passableFunctions: [
      'isNumber',
      'isInfinity',
    ],
  },
  {
    value: -Infinity,
    type: 'number',
    strictType: 'number',
    passableFunctions: [
      'isNumber',
      'isInfinity',
    ],
  },
  {
    value: new Number(),
    type: 'object',
    strictType: 'object',
    passableFunctions: [],
  },
  {
    value: '0',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      'isStringifiedNumber',
      ['isNumber', true],
      'isStringifiedFiniteNumber',
      ['isFiniteNumber', true],
    ],
  },
  {
    value: '-1',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      'isStringifiedNumber',
      ['isNumber', true],
      'isStringifiedFiniteNumber',
      ['isFiniteNumber', true],
    ],
  },
  {
    value: '1',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      'isStringifiedNumber',
      ['isNumber', true],
      'isStringifiedFiniteNumber',
      ['isFiniteNumber', true],
    ],
  },
  {
    value: '-1.24',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      'isStringifiedNumber',
      ['isNumber', true],
      'isStringifiedFiniteNumber',
      ['isFiniteNumber', true],
    ],
  },
  {
    value: '1.24',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      'isStringifiedNumber',
      ['isNumber', true],
      'isStringifiedFiniteNumber',
      ['isFiniteNumber', true],
    ],
  },
  {
    value: 'Infinity',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      'isStringifiedNumber',
      ['isNumber', true],
      'isStringifiedInfinity',
      ['isInfinity', true],
    ],
  },
  {
    value: '+Infinity',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      'isStringifiedNumber',
      ['isNumber', true],
      'isStringifiedInfinity',
      ['isInfinity', true],
    ],
  },
  {
    value: '-Infinity',
    type: 'string',
    strictType: 'string',
    passableFunctions: [
      'isString',
      'isStringifiedNumber',
      ['isNumber', true],
      'isStringifiedInfinity',
      ['isInfinity', true],
    ],
  },
]

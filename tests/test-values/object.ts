import {Value} from './value';

export const ObjectValues: Value[] = [
  /**
   * True
   */
  {
    value: {},
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: [
      'isPlainObject',
      'isObject',
    ],
  },
  {
    value: {foo: 'foo', ...{bar: 'bar'}},
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: [
      'isPlainObject',
      'isObject',
    ],
  },
  {
    value: new Object(),
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: [
      'isPlainObject',
      'isObject',
    ],
  },
  {
    value: Object.create({}),
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: [
      'isPlainObject',
      'isObject',
    ],
  },
  {
    value: {
      hasOwnProperty: () => false,
      isPrototypeOf: () => false,
    },
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: [
      'isPlainObject',
      'isObject',
    ],
  },
  {
    value: {
      hasOwnProperty: () => true,
      isPrototypeOf: () => true,
    },
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: [
      'isPlainObject',
      'isObject',
    ],
  },
  {
    value: {
      hasOwnProperty: false,
      isPrototypeOf: false,
    },
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: [
      'isPlainObject',
      'isObject',
    ],
  },
  {
    value: Object.prototype,
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: [
      'isPlainObject',
      'isObject',
    ],
  },
  {
    value: {constructor: Object},
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: [
      'isPlainObject',
      'isObject',
    ],
  },
  {
    value: {prototype: 'string'},
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: [
      'isPlainObject',
      'isObject',
    ],
  },

  /**
   * False
   */
  {
    value: new Date(),
    type: 'object',
    strictType: 'date',
    passableFunctions: [
      'isObject',
      'isDate',
    ],
  },
  {
    value: Array.prototype,
    type: 'object',
    strictType: 'array',
    passableFunctions: [
      'isObject',
      'isArray',
    ],
  },
  {
    value: class{},
    type: 'function',
    passableFunctions: ['isFunction'],
  },
  {
    value: new class{},
    type: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: class Foo{},
    type: 'function',
    passableFunctions: ['isFunction'],
  },
  {
    value: (() => {
      class Foo{}
      return new Foo();
    })(),
    type: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: (() => {
      class Foo{}
      class Bar extends Foo{}
      return Bar;
    })(),
    type: 'function',
    passableFunctions: ['isFunction'],
  },
  {
    value: (() => {
      class Foo{}
      class Bar extends Foo{}
      return new Bar();
    })(),
    type: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: Object.create(null),
    type: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: new class extends Object{},
    type: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: {constructor: Array},
    type: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: {constructor: 'string'},
    type: 'object',
    passableFunctions: ['isObject'],
  },
]

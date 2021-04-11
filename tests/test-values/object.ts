import {Value} from './value';

export const ObjectValues: Value[] = [
  /**
   * True
   */
  {
    value: {},
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: ['isPlainObject'],
  },
  {
    value: {foo: 'foo', ...{bar: 'bar'}},
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: ['isPlainObject'],
  },
  {
    value: new Object(),
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: ['isPlainObject'],
  },
  {
    value: Object.create({}),
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: ['isPlainObject'],
  },
  {
    value: {
      hasOwnProperty: () => false,
      isPrototypeOf: () => false,
    },
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: ['isPlainObject'],
  },
  {
    value: {
      hasOwnProperty: () => true,
      isPrototypeOf: () => true,
    },
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: ['isPlainObject'],
  },
  {
    value: {
      hasOwnProperty: false,
      isPrototypeOf: false,
    },
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: ['isPlainObject'],
  },
  {
    value: Object.prototype,
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: ['isPlainObject'],
  },
  {
    value: {constructor: Object},
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: ['isPlainObject'],
  },
  {
    value: {prototype: 'string'},
    type: 'object',
    strictType: 'plainobject',
    passableFunctions: ['isPlainObject'],
  },

  /**
   * False
   */
  {
    value: new Date(),
    type: 'object',
    strictType: 'object',
    passableFunctions: ['isObject'],
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
    strictType: 'function',
    passableFunctions: ['isObject', 'isFunction'],
  },
  {
    value: new class{},
    type: 'object',
    strictType: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: class Foo{},
    type: 'function',
    strictType: 'function',
    passableFunctions: ['isObject', 'isFunction'],
  },
  {
    value: (() => {
      class Foo{}
      return new Foo();
    })(),
    type: 'object',
    strictType: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: (() => {
      class Foo{}
      class Bar extends Foo{}
      return Bar;
    })(),
    type: 'function',
    strictType: 'function',
    passableFunctions: ['isObject', 'isFunction'],
  },
  {
    value: (() => {
      class Foo{}
      class Bar extends Foo{}
      return new Bar();
    })(),
    type: 'object',
    strictType: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: Object.create(null),
    type: 'object',
    strictType: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: new class extends Object{},
    type: 'object',
    strictType: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: {constructor: Array},
    type: 'object',
    strictType: 'object',
    passableFunctions: ['isObject'],
  },
  {
    value: {constructor: 'string'},
    type: 'object',
    strictType: 'object',
    passableFunctions: ['isObject'],
  },
]

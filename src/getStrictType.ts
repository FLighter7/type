import {getType} from './getType.js';
import {isNan} from './isNan.js';
import {isNull} from './isNull.js';
import {isArray} from './isArray.js';
import {isRegExp} from './isRegExp.js';
import {isMap} from './isMap.js';
import {isSet} from './isSet.js';
import {isWeakMap} from './isWeakMap.js';
import {isWeakSet} from './isWeakSet.js';
import {isDate} from './isDate.js';
import {isPlainObject} from './isPlainObject.js';

type TypeofStrictType = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol'
                      | 'undefined' | 'object' | 'function' | 'nan' | 'null'
                      | 'array' | 'plainobject' | 'date' | 'regexp' | 'map'
                      | 'set' | 'weakmap' | 'weakset';

export const getStrictType = (val: unknown): TypeofStrictType => {
  const type = getType(val);

  // Number
  if (type === 'number') {
    return isNan(val) ? 'nan' : type;
  }

  // String, BigInt, Boolean, Symbol, Undefined, Function
  if (type !== 'object') {
    return type;
  }

  /**
   * Object
   */
  // Null
  if (isNull(val)) {
    return 'null';
  }

  // Array
  if (isArray(val)) {
    return 'array';
  }

  // Plain object
  if (isPlainObject(val)) {
    return 'plainobject';
  }

  // Date
  if (isDate(val)) {
    return 'date';
  }

  // RegExp
  if (isRegExp(val)) {
    return 'regexp';
  }

  // Map
  if (isMap(val)) {
    return 'map';
  }

  // Set
  if (isSet(val)) {
    return 'set';
  }

  // WeakMap
  if (isWeakMap(val)) {
    return 'weakmap';
  }

  // WeakSet
  if (isWeakSet(val)) {
    return 'weakset';
  }

  return 'object';
};

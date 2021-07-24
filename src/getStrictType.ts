type TypeofStrictType = 'number' | 'nan'
                      | 'string' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'function'
                      | 'null' | 'object' | 'plainobject'
                      | 'notfound'// not found type
                      | string;// other object types (map, set, weakmap, weakset, array, date, regexp, error, ...)

export const getStrictType = (val: unknown): TypeofStrictType => {
  const type = typeof val;

  // Number
  if (type === 'number') {
    return val !== val ? 'nan' : type;
  }

  // String, BigInt, Boolean, Symbol, Undefined, Function
  if (type !== 'object') {
    return type;
  }

  // Null
  if (val === null) {
    return 'null';
  }

  /**
   * Other object types
   */
  const match = (Object.prototype.toString.call(val) as string).match(/^\[object ([a-z0-9]+)\]$/i);

  // Type not found
  if (!match) {
    return 'notfound';
  }

  const stringifiedType = match[1].toLowerCase();
  return stringifiedType === 'object' && val.constructor === Object
    ? 'plainobject'
    : stringifiedType;
};

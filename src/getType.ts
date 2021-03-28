type TypeofType = 'string' | 'number'
                | 'bigint' | 'boolean'
                | 'symbol' | 'undefined'
                | 'object' | 'function';

/**
 * Return type using `typeof` operator
 *
 * @param {unknown} val
 * @returns {TypeofType}
 */
export const getType = (val: unknown): TypeofType => typeof val;

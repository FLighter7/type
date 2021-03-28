import {getType} from './getType.js';

/**
 * typeof undefined === 'undefined'
 * is faster than
 * undefined === undefined
 */
/**
 * Checks that a value is `undefined`
 *
 * @param {unknown} val
 * @returns {boolean}
 */
export const isUndefined = (val: unknown): boolean => getType(val) === 'undefined';

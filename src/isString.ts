import {getType} from './getType.js';

/**
 * Checks that a value is string
 *
 * Note: `new String` **is not** a string, it's an object
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isString = (val: unknown): boolean => getType(val) === 'string';

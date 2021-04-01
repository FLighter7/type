import {getType} from './getType.js';

/**
 * Checks that a value is function
 *
 * Note: `class` **is** function, `new Function` **is** function
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isFunction = (val: unknown): boolean => getType(val) === 'function';

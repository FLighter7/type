import {getType} from './getType.js';
import {isNan} from './isNan.js';

/**
 * To avoid the circular dependency between `isNumber` and `isStringifiedNumber`
 *
 * Checks that a value is number and not `NaN`
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const _isNumber = (val: unknown): boolean => (getType(val) === 'number' && !isNan(val));

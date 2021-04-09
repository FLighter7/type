import {isString} from './isString.js';

/**
 * Checks that a value is a valid json string
 *
 * @param {unknown} val any value
 * @returns {boolean}
 */
export const isJsonString = (val: unknown): boolean => {
  if (!isString(val)) {
    return false;
  }

  try {
    JSON.parse(val as string);
    return true;
  } catch (e) {
    return false;
  }
};

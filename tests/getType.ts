import prettyFormat from 'pretty-format';
import values from './test-values';
import {getType} from '../umd';

export default () => describe('getType()', () =>
  values.forEach(({value, type}) =>
    test(
      `Type of "${prettyFormat(value)}" is "${type}"`,
      () => expect(getType(value)).toBe(type)
    )
  )
)

import prettyFormat from 'pretty-format';
import values from './test-values';
import {isUndefined} from '../umd';

const functionName = 'isUndefined';

export default () => {
  describe(`${functionName}()`, () => {
    values.forEach(({value, passableFunctions}) => {
      const valuePassTest = passableFunctions.includes(functionName);
      const pass = valuePassTest ? 'passes' : "doesn't pass";
      test(`The value "${prettyFormat(value)}" ${pass} the test`, () => {
        expect(isUndefined(value)).toBe(valuePassTest);
      });
    });
  });
}

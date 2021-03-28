import prettyFormat from 'pretty-format';
import values from './test-values';
import {isStringifiedUndefined} from '../umd';

const functionName = 'isStringifiedUndefined';

export default () => {
  describe(`${functionName}()`, () => {
    values.forEach(({value, passableFunctions}) => {
      const valuePassTest = passableFunctions.includes(functionName);
      const pass = valuePassTest ? 'passes' : "doesn't pass";
      test(`The value "${prettyFormat(value)}" ${pass} the test`, () => {
        expect(isStringifiedUndefined(value)).toBe(valuePassTest);
      });
    });
  });
}

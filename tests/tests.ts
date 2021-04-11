import prettyFormat from 'pretty-format';
import values from './test-values';
import availableForTest from './availableForTest';
import * as Type from '../umd';

export default () => {
  // Each function
  availableForTest.forEach(f => {
    describe(`${f}()`, () => {

      // Each value in function
      values.forEach(({value, type, strictType, passableFunctions}) => {
        const prettyValue = prettyFormat(value);

        // getType
        if(f === 'getType') {
          test(
            `Type of "${prettyValue}" is "${type}"`,
            () => expect(Type[f](value)).toBe(type)
          );

        // getStrictType
        } else if(f === 'getStrictType') {
          test(
            `Strict type of "${prettyValue}" is "${strictType}"`,
            () => expect(Type[f](value)).toBe(strictType)
          );

        // is* functions  
        } else {
          let valuePassTest = false;
          let args: unknown[] = [];

          for(const pf of passableFunctions) {
            const isArray = Array.isArray(pf);
            const functionName = isArray ? pf[0] : pf;

            if(functionName === f) {
              valuePassTest = true;
              args = isArray ? (pf as [string, unknown]).slice(1) : [];
              break;
            }
          }

          const passText = valuePassTest ? 'passes' : "doesn't pass";

          test(
            `The value "${prettyValue}" ${passText} the test`,
            () => expect(Type[f](value, ...(args as any))).toBe(valuePassTest)
          );
        }
      });
    });
  });
}

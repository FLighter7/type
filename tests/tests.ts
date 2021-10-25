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
          type = type ?? 'string';// simplify
          test(
            `Type of "${prettyValue}" is "${type}"`,
            () => expect(Type[f](value)).toBe(type)
          );

        // getStrictType
        } else if(f === 'getStrictType') {
          strictType = strictType ?? type ?? 'string';// simplify
          test(
            `Strict type of "${prettyValue}" is "${strictType}"`,
            () => expect(Type[f](value)).toBe(strictType)
          );

        // is* functions
        } else {
          let wasExecuted = false;// positive tests were executed

          // Positive testing
          for (const pf of passableFunctions) {
            const hasArgs = Array.isArray(pf);
            const functionName = hasArgs ? pf[0] : pf;

            // A function doesn't fit
            if (functionName !== f) {
              continue;
            }

            // A function fits -> change flag and execute
            if (!wasExecuted) {
              wasExecuted = true;
            }

            const args = hasArgs ? (pf as [string, unknown]).slice(1) : [];

            test(
              `The value "${prettyValue}" passes the test with arguments: ${args.join(', ')}`,
              () => expect(Type[f](value, ...(args as any))).toBe(true)
            );
          }

          // Negative testing
          if (!wasExecuted) {
            test(
              `The value "${prettyValue}" doesn't pass the test`,
              () => expect(Type[f](value)).toBe(false)
            );
          }
        }
      });
    });
  });
}

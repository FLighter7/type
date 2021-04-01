import * as Type from '../../umd';

type FunctionName = keyof typeof Type;

export type Value = {
  value: unknown,
  type: ReturnType<typeof Type.getType>,
  strictType: string,
  passableFunctions: (FunctionName | [FunctionName, unknown])[],
}

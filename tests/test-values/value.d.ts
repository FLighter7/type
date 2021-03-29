export type Value = {
  value: unknown,
  type: string,
  strictType: string,
  passableFunctions: (string | [string, unknown])[],
}

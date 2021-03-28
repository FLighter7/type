import resolve    from '@rollup/plugin-node-resolve';
import commonjs   from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import {terser}   from 'rollup-plugin-terser';

const input    = './src/index.ts',
      output   = './download/type.min.js',
      iifeName = 'Type';

const license = `
/*!
 * @license MIT, 2021-present
 * @author FLighter
 * @see https://github.com/FLighter7/type
 */`;

export default {
  input,
  output: {
    file: output,
    format: 'iife',
    name: iifeName,
    banner: license,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {declaration: false},
      },
    }),
    terser(),
  ],
}

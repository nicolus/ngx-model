import nodeBuiltins from 'rollup-plugin-node-builtins';
import nodeResolve from 'rollup-plugin-node-resolve';
import nodeGlobals from 'rollup-plugin-node-globals';
import sourcemaps from 'rollup-plugin-sourcemaps';
// import pascalCase from 'pascal-case';
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [{
    file: pkg.main,
    format: 'es',
  }, {
    file: pkg.module,
    format: 'cjs',
  }, {
    file: pkg.browser,
    format: 'umd',
    name : 'Viewer',
    exports: 'named',
    sourcemap: true,
  }],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    //...Object.keys(pkg.dependencies || {}),
  ],
  plugins: [
    sourcemaps(), nodeResolve(), nodeGlobals(), nodeBuiltins(), commonjs(), terser(),
    typescript()
  ],
};

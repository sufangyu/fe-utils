import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { eslint } from "rollup-plugin-eslint";
import cleaner from 'rollup-plugin-cleaner';
import { terser } from "rollup-plugin-terser";
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

// 是否是生产
const IS_PROD = process.env.NODE_ENV === 'production';
const FILES_MAP = {
  umd: pkg.main,
  esm: pkg.module,
};
const formats = ['umd', 'esm'];

const output = formats.map((format) => ({
  file: FILES_MAP[format],
  format,
  name: pkg.name,
}));

// // 生成模式生成压缩文件
// if (IS_PROD) {
//   formats.forEach((format) => {
//     output.push({
//       file: FILES_MAP[format].replace('.js', '.min.js'),
//       format,
//       name: pkg.name,
//       plugins: [terser()],
//     });
//   });
// }

export default {
  input: 'src/index.ts',
  output,
  plugins: [
    eslint({
      fix: true,
      exclude: 'node_modules/**'
    }),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: [".ts", ".js"],
    }),
    cleaner({
      targets: [
        './dist/',
        './lib/',
        './types/',
      ]
    }),
  ],
};

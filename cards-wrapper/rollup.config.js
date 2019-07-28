import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
// import copy from 'rollup-plugin-copy-assets';
import babel from 'rollup-plugin-babel'

import pkg from './package.json'

const extensions = [
  '.js'
]

const name = 'AntDCardsComponents'

const { external, globals } = {

  "globals": {
    "react": "React",
    "react-dom": "ReactDom",
    "react-router-dom": "react-router-dom",
    'antd': 'antd',
    'lodash': 'lodash',
    'uuid':'uuid',
    'react-image':'react-image',
    '@react-pdf/renderer': '@react-pdf/renderer'
  },

  "external": [
    'antd',
    'lodash',
    'uuid',
    'react-image',
    '@react-pdf/renderer',
    'react',
    'react-dom'
  ]
};

// https://github.com/rollup/rollup/issues/2646
export default {
  input: './src/index.js',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external,

  globals,


  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      include: ['src/*'],
      // include: ['src/**/*'],
      exclude: [
        'node_modules/**',
        '/src/data/__tests__'
      ]
      // exclude: 'node_modules/**'
      // presets: presets,
      // plugins: plugins
    }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs({
      exclude: 'src/**',
    })



    // just fix in order to move json files to npm
    // copy({
    //   assets: [
    //     './src/data'
    //   ],
    // }),
  ],

  output: [{
    file: pkg.main,
    format: 'cjs'
  }, {
    file: pkg.module,
    format: 'es'
  }
  // {
  //   file: pkg.browser,
  //   format: 'iife',
  //   name,
  //
  //   // https://rollupjs.org/guide/en#output-globals-g-globals
  //   globals: {}
  // }
  ]
}

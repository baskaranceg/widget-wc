import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';

// Static assets will vary depending on the application
const copyConfig = {
  targets: [
	{ src: 'node_modules/@webcomponents', dest: 'widget-component/node_modules' },
	{ src: 'node_modules/lit-element', dest: 'widget-component/node_modules' },
  { src: 'index.html', dest: 'widget-component' },
  ],
};

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
  input: './webWidgetCtrl.js',
  output: {
    dir: 'widget-component/src/components',
    format: 'esm',
  },
  plugins: [
    minifyHTML(),
    copy(copyConfig),
    resolve(),
  ],
};

export default config;
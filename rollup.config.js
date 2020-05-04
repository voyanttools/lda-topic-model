import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

let config = {
	input: 'lib/index.js',
	output: {
		file: 'dist/lda-topic-model.js',
		format: 'cjs'
	},
	plugins: [
		resolve(),
		commonjs(),
		babel()
	]
};

export default config;

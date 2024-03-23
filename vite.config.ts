import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	assetsInclude: 'src/lib/scripts/mathquill.min.js'
};

export default config;

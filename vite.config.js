import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import vueJsx from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
});

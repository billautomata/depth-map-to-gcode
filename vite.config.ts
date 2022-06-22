import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill'
import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill'
import nodePolyfills from 'rollup-plugin-polyfill-node'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'depth-map-to-gcode',
  plugins: [ nodePolyfills(), vue()],
  build: {
    rollupOptions: {
      plugins: [
        nodePolyfills()
      ]
    }
  }
})

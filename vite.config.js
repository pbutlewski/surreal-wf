const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  server: {
    host: '0.0.0.0',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'surreal.js'),
      name: 'surreal-wf.js',
      fileName: (format) => `surreal-wf.${format}.js`
    }
  }
});
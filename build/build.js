'use strict'
// require('./check-versions')()


const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')

const _BUILD_ENV_ = process.env.BUILD_ENV || 'production'

console.log(`
  ********************
  building for ${_BUILD_ENV_}...
  ********************
`)

webpack(webpackConfig, (err, stats) => {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log('\x1B[31m%s\x1B[39m', '  Build failed with errors.\n')
    process.exit(1)
  }

  console.log('\x1B[36m%s\x1B[39m', '  Build complete.\n')
  console.log(
    '\x1B[33m%s\x1B[39m',
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  )
})

  
const path = require('path'),
  webpack = require('webpack'),
  styleRules = require('./styleLoaderConf'),
  VueLoaderPlugin = require('vue-loader/lib/plugin'),
  // CopyWebpackPlugin = require('copy-webpack-plugin'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");
  // ManifestPlugin = require('webpack-manifest-plugin'),
  // SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const _PROD_ = process.env.NODE_ENV === 'production';

const resolve = (dir) => {
  return path.resolve(process.cwd(), dir)
}

module.exports = {
  entry: {
    app: resolve("src/index"),
  },

  output: {
    path: resolve("dist"), // string

    publicPath: '/', // root Dir
    sourceMapFilename: '[name].map',
    chunkFilename: 'static/js/[name].[chunkhash:8].js',
    filename: 'static/js/[name].[hash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [resolve("src")],
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
      {
        test: /\.vue?$/,
        include: [
          resolve("src")
        ],
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.js?$/,
        include: [
          resolve("src")
        ],
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      ...styleRules,
      {
        test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
        loader: "url-loader",
        options: {
          name: "assets/fonts/[name].[hash:8].[ext]",
          limit: 2048
        }
      },
      {
        test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: "url-loader",
        options: {
          name: "assets/imgs/[name].[hash:8].[ext]",
          limit: 2048
        }
      }
    ]
  },

  resolve: {
    // 解析模块请求的选项
    // （不适用于对 loader 解析）
    modules: [
      "node_modules",
      resolve("src")
    ],
    // 用于查找模块的目录

    extensions: [".js", ".ts", ".vue"],

    alias: {
      '@': resolve('src'),
    }
  },

  // performance: {
  //   hints: "warning", // 枚举
  //   maxAssetSize: 200000, // 整数类型（以字节为单位）
  //   maxEntrypointSize: 400000, // 整数类型（以字节为单位）
  //   assetFilter: function(assetFilename) {
  //       // 提供资源文件名的断言函数
  //       return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
  //   }
  // },

  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  target: "web", // default

  // externals: ["react", /^@angular\//],
  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们

  stats: "errors-only",
  // 精确控制要显示的 bundle 信息

  optimization: {
    minimize: _PROD_ ? true : false,
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        react: {
          name: 'vendor',
          test: /[\\/]node_modules\/(vue|vue-router)[\\/]/,
          priority: 1,
          chunks: "all"
        },
        default: {
          name: 'common',
          minChunks: 2,
          chunks: "all",
          priority: -10,
          reuseExistingChunk: true
        }
      }
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash].css",
    }),
    // new webpack.ProvidePlugin({
    //   $http: [resolve('src/utils/http.ts'), 'default'],
    //   $msg: [resolve('node_modules/antd/es/message/index.js'), 'default']
    // }),
    // new CopyWebpackPlugin([{
    //   from: resolve('statics'),
    //   ignore: ['.*']
    // }])
  ]
}
const path = require('path'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin")

const _PROD_ = process.env.NODE_ENV === 'production'

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: _PROD_ ? false : true,
    plugins: [
      require('autoprefixer'),
      require('postcss-pxtorem')({
        rootValue: 40,
        propList: ['*'],
        selectorBlackList: [/^\.(oc)-[\w]*/]
      })
    ]
  }
}

const styleRules = [
	{
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      postcssLoader,
      'sass-loader'
    ],
    include: [path.join(__dirname, '../src')]
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      postcssLoader
    ]
  },
]

if(_PROD_) { // build env
  styleRules.forEach(rule => {
    rule.use.splice(0, 1, MiniCssExtractPlugin.loader)
  })
}

module.exports = styleRules

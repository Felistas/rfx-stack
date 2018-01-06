const Dir = global.DIR;

export default function getLoaders() {
  return {
    eslint: {
      test: /\.jsx?$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      exclude: /node_modules/,
      include: Dir.src,
    },
    jsx: {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
    },
    json: {
      test: /\.json$/,
      loader: 'json-loader',
    },
    url: {
      // the "?v=" regex fixes fontawesome issue
      test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
      loader: 'url-loader',
    },
    file: {
      // the "?v=" regex fixes fontawesome issue
      test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
      loader: 'url-loader',
    },
    cssGlobal: {
      test: /\.global\.css$/,
      loader: 'style-loader!css-loader!postcss-loader',
    },
    cssModules: {
      test: /^((?!\.global).)*\.(scss|css)$/,
      /* loader: based on target script */
    },
    sassLoader: {
      test: /\.global\.scss$/,
      loader: 'sass-loader',
    },
  };
}

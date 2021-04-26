const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: 'all'
    }
  };

  if (isProd) {
    configObj.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ];
  }

  return configObj;
};

const plugins = () => {
  const basePlugins = [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/contentPage.html'),
      filename: 'contentPage.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/category-page.html'),
      filename: 'category-page.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/store-card.html'),
      filename: 'store-card.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/store-card-show-message.html'),
      filename: 'store-card-show-message.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/cabinet-entity.html'),
      filename: 'cabinet-entity.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/cabinet-profile.html'),
      filename: 'cabinet-profile.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/cabinet-password.html'),
      filename: 'cabinet-password.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/cabinet-480.html'),
      filename: 'cabinet-480.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/cabinet-entity-480.html'),
      filename: 'cabinet-entity-480.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/cabinet-profile-480.html'),
      filename: 'cabinet-profile-480.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/cabinet-password-480.html'),
      filename: 'cabinet-password-480.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/text-page.html'),
      filename: 'text-page.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/page-404.html'),
      filename: 'page-404.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/coming-soon.html'),
      filename: 'coming-soon.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/common-page.html'),
      filename: 'common-page.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'src/assets') , to: path.resolve(__dirname, 'app')}
      ]
    }),
  ];

  if (isProd) {
    basePlugins.push(
      new ImageminPlugin({
        bail: false, // Ignore errors on corrupted images
        cache: true,
        imageminOptions: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 1 }],
            [
              "svgo",
              {
                plugins: [
                  {
                    removeViewBox: false
                  }
                ]
              }
            ]
          ]
        }
      })
    )
  }

  return basePlugins;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'app'),
    publicPath: ''
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'app'),
    open: true,
    compress: true,
    hot: true,
    port: 4000,
  },
  optimization: optimization(),
  plugins: plugins(),
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            },
          },
          'css-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            }
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: `./img/${filename('[ext]')}`
          }
        }],
      },
      {
        test: /\.(?:|woff2|woff|eot|ttf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: `./fonts/${filename('[ext]')}`
          }
        }],
      }
    ]
  }
};

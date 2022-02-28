const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    // '@storybook/addon-postcss',
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     styleLoaderOptions: {},
    //     cssLoaderOptions: {
    //       modules: true,
    //       sourceMap: true,
    //       importLoaders: 1,
    //     },
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
    // 'storybook-css-modules-preset',
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
    // 'storybook-addon-sass-postcss',
    // {
    //   name: 'storybook-addon-sass-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
    // '@storybook/preset-scss',
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     cssLoaderOptions: {
    //       modules: true,
    //       localIdentName: '[name]__[local]--[hash:base64:5]',
    //     },
    //   },
    // },
  ],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },

  // webpackFinal: async (config, { configType }) => {
  //   // Remove the existing css rule
  //   // config.module.rules = config.module.rules.filter(
  //   //   (f) => f.test.toString() !== '/\\.css$/'
  //   // );

  //   // Make whatever fine-grained changes you need
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     loaders: ['style-loader', 'css-loader', 'postcss-loader'],
  //     include: path.resolve(__dirname, '../'),
  //   });

  //   // Return the altered config
  //   return config;
  // },

  // webpackFinal: async ({ config, mode }) => {
  //   // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // Make whatever fine-grained changes you need
  //   config.module.rules.push({
  //     test: /\.module\.css$/,
  //     exclude: /\.module\.css$/,
  //     use: ['style-loader', 'css-loader'],
  //     include: path.resolve(__dirname, '../'),
  //   });

  //   // Return the altered config
  //   return config;
  // },

  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // Make whatever fine-grained changes you need
  //   config.module.rules.push({
  //     test: /\.module\.css$/,
  //     exclude: /\.module\.css$/,
  //     use: ['style-loader', 'css-loader'],
  //     // include: path.resolve(__dirname, '../'),
  //     include: path.resolve(__dirname, '../src'),
  //   });

  //   // Return the altered config
  //   return config;
  // },

  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // Make whatever fine-grained changes you need
  //   // config.module.rules.push({
  //   //   test: /\.css$/,
  //   //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   //   include: path.resolve(__dirname, '../'),
  //   // });

  //   // Return the altered config
  //   return config;
  // },

  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       exclude: /node_modules/,
  //       use: [
  //         {
  //           loader: 'style-loader',
  //         },
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             importLoaders: 1,
  //           }
  //         },
  //         {
  //           loader: 'postcss-loader'
  //         }
  //       ]
  //     }
  //   ]
  // }
};

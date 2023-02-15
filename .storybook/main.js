const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    })

    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']

    config.resolve.alias = {
      ...config.resolve.alias,
      '~components': path.resolve(__dirname, '../src/components'),
      '~hooks': path.resolve(__dirname, '../src/hooks'),
      '~interfaces': path.resolve(__dirname, '../src/interfaces'),
      '~pages': path.resolve(__dirname, '../src/pages'),
      '~server': path.resolve(__dirname, '../src/server'),
      '~services': path.resolve(__dirname, '../src/services'),
      '~stories': path.resolve(__dirname, '../src/stories'),
      '~theme': path.resolve(__dirname, '../src/theme'),
      '~utils': path.resolve(__dirname, '../src/utils'),
      '~icons': path.resolve(__dirname, '../src/public/icons'),
    }
    return config
  },
}

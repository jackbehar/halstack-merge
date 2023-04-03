module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.js',
          'src/components/Checkbox/Checkbox.js',
          'src/components/TextInput/TextInput.js',
          'src/components/Card/Card.js',
          'src/components/Chip/Chip.js',
          'src/components/Flex/Flex.js',
          'src/components/Select/Select.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'webpack.config.js',
  },
  name: 'DXC Design System'
};

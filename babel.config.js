module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          test: './test',
          '@': './src',
          underscore: 'lodash',
          components: './src/components',
          constants: './src/constants',
        },
      },
    ],
  ],
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@cryptomania': './App'
        }
      }
    ]
  ]
};

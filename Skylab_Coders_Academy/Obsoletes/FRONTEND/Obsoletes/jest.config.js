module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
        '|react-navigation-tabs' +
        '|react-native-splash-screen' +
        '|react-native-screens' +
        '|react-native-reanimated' +
        '|@react-navigation/native' +
        '|@react-navigation/stack' +
        '|expo-font' +
        '|expo-app-loading' +
        '|react-native-vector-icons/Ionicons' +
      ')/)'
  ]
}
;

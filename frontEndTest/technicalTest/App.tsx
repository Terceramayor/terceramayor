// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
  StyleSheet, View, Text, ImageBackground
} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from './src/routeComponents/ShoppingCart/ShoppingCart';
import ContinueShopping from './src/routeComponents/ContinueShopping/ContinueShopping';
import configureStore from './src/redux/store/configureStore';
import colors from './src/assets/colors';
import { navigationRoutes, fontNames } from './src/utils/noMagicStrings';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  appBackground: {

    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});
export default function App() {
  const [loaded] = useFonts({

    [fontNames.MontserratLight]: require('./src/assets/fonts/Montserrat-Light.ttf'),
    [fontNames.MontserratRegular]: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    [fontNames.MontserratMedium]: require('./src/assets/fonts/Montserrat-Medium.ttf'),
    [fontNames.RobotoBold]: require('./src/assets/fonts/Roboto-Bold.ttf'),
    [fontNames.RobotoRegular]: require('./src/assets/fonts/Roboto-Regular.ttf')
  });

  if (!loaded) {
    return <AppLoading />;
  }
  return (

    <Provider store={configureStore()}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={navigationRoutes.ShoppingCart} component={ShoppingCart} />
          <Stack.Screen name={navigationRoutes.ContinueShopping} component={ContinueShopping} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

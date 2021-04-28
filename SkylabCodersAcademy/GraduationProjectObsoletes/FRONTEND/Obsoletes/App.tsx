
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';
import Dashboard from './src/components/routeComponents/dashboard/Dashboard';
import Stats from './src/components/routeComponents/stats/Stats';
import Casuistic from './src/components/routeComponents/casuistic/Casuistic';
import colors from './src/assets/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Broken from './src/components/routeComponents/broken/Broken';
import WelcomeScreen from './src/components/commonComponents/welcomeScreen/WelcomeScreen';
import Profile from './src/components/commonComponents/profile/Profile';
import { NavigationRoutes, FontNames } from './src/utils/enums';

const Stack = createStackNavigator();

export default function App () {
  const [splashScreen, setSplashScreen] = useState(true);
  const [loaded] = useFonts({
    [FontNames.RobotoBold]: require('./src/assets/fonts/Roboto-Bold.ttf'),
    [FontNames.RobotoRegular]: require('./src/assets/fonts/Roboto-Regular.ttf'),
    [FontNames.MontserratLight]: require('./src/assets/fonts/Montserrat-Light.ttf'),
    [FontNames.MontserratRegular]: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    [FontNames.MontserratMedium]: require('./src/assets/fonts/Montserrat-Medium.ttf')
  });

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, []);

  if (!loaded) {
    return <AppLoading />;
  }

  return (
<>

    {(splashScreen)
      ? (
      <WelcomeScreen/>
        )
      : (
        <Provider store={configureStore()}>
        <View style={styles.appBackground}>
          <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name={NavigationRoutes.Dashboard} component={Dashboard}/>
                <Stack.Screen name={NavigationRoutes.Stats} component={Stats}/>
                <Stack.Screen name={NavigationRoutes.Casuistic} component={Casuistic}/>
                <Stack.Screen name={NavigationRoutes.Broken} component={Broken}/>
                <Stack.Screen name={NavigationRoutes.Profile} component={Profile}/>

              </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
        )}

</>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
    backgroundColor: colors.background
  }
});

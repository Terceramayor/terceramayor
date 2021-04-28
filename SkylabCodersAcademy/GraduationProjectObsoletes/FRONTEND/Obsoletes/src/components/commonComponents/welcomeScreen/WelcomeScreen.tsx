// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text, Image } from 'react-native';
import welcomeScreenStyles from './welcomeScreenStyles';

export default function WelcomeScreen () {
  const {
    welcomeImageContainer,
    logoImage,
    obsoletesAboutTitle
  } = welcomeScreenStyles;

  return (

        <View style={welcomeImageContainer}>
            <Image source={require('../../../assets/images/logo.png')} style={logoImage}/>
            <Text style={obsoletesAboutTitle}>Obsoletes</Text>
        </View>

  );
}

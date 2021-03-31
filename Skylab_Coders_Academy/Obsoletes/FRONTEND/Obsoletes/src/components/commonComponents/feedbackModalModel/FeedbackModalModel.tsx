// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text } from 'react-native';
import { FeedbackModalModelInterface } from '../../../utils/interfaces';
import FeedbackModalModelStyles from './FeedbackModalModelStyles';

export default function FeedbackModalModel ({ textToDisplay, logedUserName }:FeedbackModalModelInterface) {
  const {
    failedSuccessContainer,
    failedSuccessText,
    failedSuccessUpperLowerContainer
  } = FeedbackModalModelStyles;

  return (

<>
    <View style={failedSuccessUpperLowerContainer}></View>
    <View style={failedSuccessContainer} >
      <Text style={failedSuccessText}>{textToDisplay}{logedUserName}</Text>
    </View>
    <View style={failedSuccessUpperLowerContainer}></View>
</>

  );
}

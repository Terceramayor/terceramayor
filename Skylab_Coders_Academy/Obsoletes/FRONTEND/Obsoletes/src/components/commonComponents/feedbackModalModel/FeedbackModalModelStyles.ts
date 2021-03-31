import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { FontNames } from '../../../utils/enums';

const FeedbackModalModelStyles = StyleSheet.create({

  failedSuccessContainer: {
    backgroundColor: colors.background,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  failedSuccessText: {
    fontFamily: FontNames.MontserratLight,
    fontSize: 20,
    textAlign: 'center'
  },
  failedSuccessUpperLowerContainer: {
    height: '40%',
    backgroundColor: colors.blackTranslucid
  }
});

export default FeedbackModalModelStyles;

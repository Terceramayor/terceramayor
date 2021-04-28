import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { FontNames } from '../../../utils/enums';

const logInSignInStyles = StyleSheet.create({

  logInSignInContainer: {
    backgroundColor: colors.black,
    height: 500,
    paddingTop: 170,
    paddingBottom: 170,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.background
  },
  inputStyle: {
    fontFamily: FontNames.MontserratLight,
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    width: '35%',
    marginLeft: 30,
    marginRight: 30,
    color: colors.white,
    backgroundColor: colors.greyTwo,
    borderColor: colors.greyOne,
    borderWidth: 1,
    borderRadius: 4
  },
  inputsContainer: {

    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  LogInSignInButtonsContainer: {

    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 100,
    height: 30,
    fontFamily: FontNames.MontserratLight,
    backgroundColor: colors.greyTwo,
    borderColor: colors.greyOne,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 4

  },
  logInSignIcons: {
    marginRight: 20,
    width: 30,
    height: 30
  },

  registerSuccessBlock: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  registerSuccessUpperLowerBlock: {
    height: '30%',
    width: '100%',
    backgroundColor: colors.blackTranslucid
  },
  registerSuccessTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: '40%',
    width: '90%',
    backgroundColor: colors.background,
    fontFamily: FontNames.MontserratLight
  },
  registerSuccessText: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: FontNames.MontserratLight
  },
  failedSuccessContainer: {
    backgroundColor: colors.background,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  failedSuccessText: {
    fontFamily: FontNames.MontserratLight,
    fontSize: 20
  },
  failedSuccessUpperLowerContainer: {
    height: '40%',
    backgroundColor: colors.blackTranslucid
  },
  alreadyLoggedInContainer: {

    backgroundColor: colors.background

  }
});

export default logInSignInStyles;

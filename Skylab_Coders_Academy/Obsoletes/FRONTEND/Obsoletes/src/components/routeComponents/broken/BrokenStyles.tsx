import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { FontNames } from '../../../utils/enums';

const BrokenStyles = StyleSheet.create({
  brokenRouteContainer: {
    flexDirection: 'column',
    backgroundColor: colors.background,
    height: '100%',
    alignItems: 'center'

  },
  brokenBackground: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: '2%',
    backgroundColor: colors.greyOne,
    height: '80%',
    width: '95%',
    alignItems: 'center',
    borderRadius: 4

  },

  infoBlockContainer: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: colors.greyThree
  },
  infoBlockContainerNewReason: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '100%',
    padding: 15,
    backgroundColor: colors.greyThree
  },
  infoBlockContainerBack: {
    height: '25%',
    backgroundColor: colors.blackTranslucid
  },
  formBlock: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    marginTop: '2%',
    marginBottom: '2%',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.greyThree
  },
  productTitle: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 23
  },
  whyIsBroken: {
    fontFamily: FontNames.MontserratLight,
    fontSize: 30
  },
  whyDidItBroke: {
    fontFamily: FontNames.MontserratLight,
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center'
  },
  inputStyle: {
    height: 45,
    width: '50%',
    textAlign: 'center',
    backgroundColor: colors.greyOne
  },
  whyIsBrokenExplanation: {
    fontFamily: FontNames.MontserratLight,
    fontSize: 16,
    textAlign: 'center'
  },
  productImage: {
    height: 125,
    width: 125,
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 15
  },

  productStats: {
    borderRadius: 5,
    alignItems: 'center',
    width: '95%',
    marginTop: '2%',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.greyThree
  },

  imageFormat: {
    height: 25,
    width: 25,
    marginBottom: 20,
    marginTop: 20
  },
  failedSuccessUpperLowerContainer: {
    height: '25%',
    backgroundColor: colors.blackTranslucid
  },
  failedSuccessContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50%',
    backgroundColor: colors.greyThree,
    paddingTop: 25,
    paddingBottom: 25,
    borderWidth: 2,
    borderColor: colors.background

  },

  failedFeedbackUpperLowerContainer: {
    height: '40%',
    backgroundColor: colors.blackTranslucid
  },

  failedFeedbackSuccessContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    backgroundColor: colors.background,
    paddingTop: 25,
    paddingBottom: 25

  },
  feedbackFailedText: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 20
  },
  feedbackText: {

    fontFamily: FontNames.MontserratLight,
    fontSize: 18,

    textAlign: 'center'

  },
  feedbackTextTap: {

    marginTop: '5%',
    fontFamily: FontNames.MontserratLight,
    fontSize: 18,
    color: colors.background,
    textAlign: 'center'

  },
  feedbackTitle: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 27,

    textAlign: 'center'
  },
  feedbackPossibleText: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 17,
    color: colors.blueText,
    textAlign: 'center'
  },
  productTextContainer: {
    borderRadius: 5,
    alignItems: 'center',
    width: '95%',
    marginTop: '2%',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.greyThree
  },

  noneAvailableOption: {
    fontFamily: FontNames.MontserratRegular,
    borderRadius: 4,
    textAlign: 'center',
    backgroundColor: colors.greyThree,
    color: colors.redText
  }
});

export default BrokenStyles;

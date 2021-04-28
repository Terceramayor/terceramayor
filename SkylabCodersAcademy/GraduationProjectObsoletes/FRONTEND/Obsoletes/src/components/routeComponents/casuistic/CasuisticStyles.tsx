import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { FontNames } from '../../../utils/enums';

const CasuisticStyles = StyleSheet.create({
  CasuisticRouteContainer: {
    flexDirection: 'column',
    backgroundColor: colors.background,
    height: '100%',
    alignItems: 'center'

  },
  casuisticBackground: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: '2%',
    backgroundColor: colors.greyOne,
    height: '80%',
    width: '95%',
    alignItems: 'center',
    borderRadius: 4

  },
  feedbackOption: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: '45%',
    width: '85%',
    marginTop: '2%',
    marginBottom: '15%',
    backgroundColor: colors.greyThree,
    borderWidth: 2,
    borderColor: colors.background
  },
  productTitleContainer: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    marginTop: '2%',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.greyThree
  },
  productTitle: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 23
  },

  productImage: {
    height: 125,
    width: 125,
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 15
  },

  broken: {
    fontFamily: FontNames.MontserratLight,
    fontSize: 23,
    color: colors.redText,
    textAlign: 'center'

  },
  boughtIt: {
    fontFamily: FontNames.MontserratLight,
    fontSize: 23,
    color: colors.blueText,
    textAlign: 'center'
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
  }

});

export default CasuisticStyles;

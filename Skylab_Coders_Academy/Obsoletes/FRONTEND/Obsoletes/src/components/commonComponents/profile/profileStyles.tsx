import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { FontNames } from '../../../utils/enums';

const profileStyles = StyleSheet.create({

  componentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background
  },
  productContainer: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    backgroundColor: colors.greyThree,
    borderRadius: 4,
    paddingLeft: 35,
    paddingRight: 35

  },
  infoCategoriesContainer: {

  },
  productDataContainer: {

  },
  obsoletionContainer: {
    alignItems: 'center'

  },
  productDataNameTextFormating: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 20
  },
  productDataOtherTextFormating: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 12
  },
  scrollViewFormat: {
    width: '95%'
  },
  helloUserProfile: {
    width: '100%',
    backgroundColor: colors.greyOne,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: FontNames.MontserratRegular,
    fontSize: 17
  }
});

export default profileStyles;

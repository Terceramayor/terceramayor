import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { FontNames } from '../../../utils/enums';

const productProfileStyles = StyleSheet.create({

  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    width: '100%',
    backgroundColor: colors.greyThree,
    borderRadius: 4,
    paddingLeft: 35,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 35

  },

  productDataContainer: {
    width: '50%'
  },
  obsoletionContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  productDataNameTextFormating: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 20,
    marginBottom: 5
  },

  productDataBrandTextFormating: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 14
  },
  productDataCategoryTextFormating: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 10
  },
  obsoletionTextFormating: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 10
  }
});

export default productProfileStyles;

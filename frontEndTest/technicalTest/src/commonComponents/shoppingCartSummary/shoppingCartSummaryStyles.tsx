import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { fontNames } from '../../utils/noMagicStrings';

const shoppingCartSummaryStyles = StyleSheet.create({
  shoppingCartContainer: {
    backgroundColor: colors.redBackground,

    paddingVertical: 5,
    marginVertical: 5
  },
  cartSummaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  cartSummaryText: {
    textAlign: 'center',
    width: '25%',

    fontFamily: fontNames.MontserratRegular,
    fontSize: 20
  },
  continueShoppingText: {

    fontFamily: fontNames.MontserratLight,
    fontSize: 12
  }

});

export default shoppingCartSummaryStyles;

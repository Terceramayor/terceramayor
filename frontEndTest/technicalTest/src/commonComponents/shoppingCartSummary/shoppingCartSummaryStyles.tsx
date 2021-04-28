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
    width: '35%',
    fontFamily: fontNames.MontserratMedium,
    fontSize: 18,
    marginRight: 35
  },
  continueShoppingText: {

    fontFamily: fontNames.MontserratMedium,
    fontSize: 12
  },
  shoppingCartIcon: {
    width: 30,
    height: 30
  }

});

export default shoppingCartSummaryStyles;

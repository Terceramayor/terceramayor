import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { fontNames } from '../../utils/noMagicStrings';

const shoppingCartStyles = StyleSheet.create({
  shoppingCartContainer: {
    backgroundColor: colors.redBackground,
    marginTop: 50,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5
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
    fontSize: 222
  }

});

export default shoppingCartStyles;

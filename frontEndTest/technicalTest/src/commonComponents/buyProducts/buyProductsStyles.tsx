import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { fontNames } from '../../utils/noMagicStrings';

const shoppingCartSummaryStyles = StyleSheet.create({
  buyContainer: {
    alignItems: 'center',
    backgroundColor: colors.redBackground,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  backToCartText: {
    marginVertical: 20,
    fontFamily: fontNames.MontserratMedium,
    fontSize: 20
  }

});

export default shoppingCartSummaryStyles;

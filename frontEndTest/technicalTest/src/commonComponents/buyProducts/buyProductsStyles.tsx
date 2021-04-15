import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { fontNames } from '../../utils/noMagicStrings';

const shoppingCartSummaryStyles = StyleSheet.create({
  buyContainer: {
    alignItems: 'center',
    backgroundColor: colors.redBackground,
    marginTop: 50,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  backToCartText: {
    fontSize: 20
  }

});

export default shoppingCartSummaryStyles;

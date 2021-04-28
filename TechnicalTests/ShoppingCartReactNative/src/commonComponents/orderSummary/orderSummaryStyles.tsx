import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { fontNames } from '../../utils/noMagicStrings';

const shoppingCartSummaryStyles = StyleSheet.create({
  orderSummaryContainer: {
    alignItems: 'center',
    backgroundColor: colors.redBackground,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 15
  },
  orderSummaryTitle: {
    fontFamily: fontNames.MontserratMedium,
    fontSize: 20,
    marginVertical: 15
  },
  SummaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderBottomWidth: 1
  },
  valueDataBlock: {
    alignItems: 'flex-end'
  },
  toPayContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between'
  },
  toPay: {
    fontSize: 20,
    fontFamily: fontNames.MontserratRegular

  },
  summaryText: {
    fontFamily: fontNames.MontserratMedium,
    fontSize: 14
  }

});

export default shoppingCartSummaryStyles;

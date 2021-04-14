import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { fontNames } from '../../utils/noMagicStrings';

const itemStyles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.contentBackground,
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  itemDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%'
  },
  itemImage: {
    height: 100,
    width: 100
  },
  itemCartDetails: {
    backgroundColor: colors.redBackground,
    width: '65%',
    alignItems: 'center'

  },
  itemQuantityPrice: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  currentStatusInfo: {
    backgroundColor: colors.contentBackground

  },
  subtotalContainer: {
    backgroundColor: colors.contentBackground

  }
});

export default itemStyles;

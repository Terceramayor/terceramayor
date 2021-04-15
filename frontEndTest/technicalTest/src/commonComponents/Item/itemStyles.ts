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
    marginHorizontal: '2%'
  },
  itemImage: {
    height: 120,
    width: 120
  },
  itemName: {
    fontSize: 17
  },
  itemCartDetails: {
    width: '65%',
    alignItems: 'center',
    paddingHorizontal: 10

  },
  itemQuantityPrice: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  currentStatusInfo: {
    justifyContent: 'space-between'

  },
  subtotalContainer: {
    alignItems: 'center'
  },
  imagesAddRemove: {
    height: 15,
    width: 15
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityText: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  },
  itemPrice: {
    textAlign: 'center'
  },
  subtotalContent: {
    fontSize: 18
  }
});

export default itemStyles;

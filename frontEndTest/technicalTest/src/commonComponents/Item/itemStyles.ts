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
    fontFamily: fontNames.MontserratMedium,
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
    marginTop: 15,
    justifyContent: 'space-between'
  },
  subtotalContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imagesAddRemove: {
    height: 15,
    width: 15
  },
  quantityControl: {
    flexDirection: 'row',
    width: '75%',
    alignItems: 'center'
  },
  quantityText: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  },
  itemPriceStore: {
    fontFamily: fontNames.MontserratLight,
    textAlign: 'center'
  },
  priceCategories: {
    fontFamily: fontNames.MontserratMedium,
    textAlign: 'center'
  },
  priceQuantity: {
    fontFamily: fontNames.MontserratMedium
  },
  subtotalContent: {
    marginTop: 20,
    paddingHorizontal: 10,
    fontFamily: fontNames.MontserratRegular,
    fontSize: 18
  },
  addToCartText: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: fontNames.MontserratMedium,
    textAlign: 'center'
  }
});

export default itemStyles;

import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { FontNames } from '../../../utils/enums';

const ProductStyles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    height: 150,
    backgroundColor: colors.greyOne,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8
  },

  productImage: {
    height: 100,
    width: 100,
    borderRadius: 4
  },

  productInfo: {
    height: '100%',
    width: '50%',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'flex-start',
    flexShrink: 1,
    paddingLeft: 10,
    paddingRight: 5
  },
  productInfoMegaco: {
    height: '100%',
    width: '70%',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: '17%',
    alignItems: 'center',
    flexShrink: 1,
    paddingLeft: 10,
    paddingRight: 5
  },

  productName: {
    fontFamily: FontNames.MontserratLight,
    fontSize: 20,
    color: colors.white

  },

  ownersExownersStyles: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  exownersStyles: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  ownersStyles: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  ownersExTextStyles: {
    fontFamily: FontNames.RobotoBold,
    fontSize: 15,
    color: colors.white
  },
  dateAndObsoletion: {
    width: '25%',
    height: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  obsoletion: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  dateFormat: {
    fontSize: 10
  },
  statsStyles: {
    color: colors.background,
    width: '100%',
    fontFamily: FontNames.MontserratLight,
    fontSize: 15,
    textAlign: 'center'
  },
  statsStylesNotAvailable: {
    color: colors.redText,
    textAlign: 'center',
    width: '100%',
    fontFamily: FontNames.RobotoBold,
    fontSize: 20
  }

});

export default ProductStyles;

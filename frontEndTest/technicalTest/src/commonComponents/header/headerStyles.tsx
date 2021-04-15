import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { fontNames } from '../../utils/noMagicStrings';

const shoppingCartSummaryStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 35,
    marginBottom: 5,
    padding: 10,
    backgroundColor: colors.contentBackground
  },
  headerMenu: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerMenuItem: {
    paddingHorizontal: 10,
    fontFamily: fontNames.MontserratMedium
  },
  logoFormat: {
    height: 40,
    width: 130
  },
  newAccountContainer: {
    backgroundColor: colors.redBackground,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%'
  },
  backToheader: {
    height: '25%',
    backgroundColor: colors.blackTranslucid
  },
  contactContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.redBackground
  },
  contactText: {
    marginHorizontal: '10%',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: fontNames.MontserratMedium
  },
  newAccountTitle: {
    marginBottom: 25,
    fontFamily: fontNames.MontserratMedium,
    fontSize: 20
  },
  labelInputBlock: {
    marginBottom: 10,
    width: '90%'
  },
  newAccountInputField: {
    borderWidth: 1,
    paddingHorizontal: 5,
    fontSize: 12
  },
  newAccountInputFieldText: {
    fontFamily: fontNames.MontserratMedium,
    fontSize: 12
  }
});

export default shoppingCartSummaryStyles;

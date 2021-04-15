import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { fontNames } from '../../utils/noMagicStrings';

const shoppingCartSummaryStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 10,
    backgroundColor: colors.contentBackground
  },
  headerMenu: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerMenuItem: {
    paddingHorizontal: 10
  },
  logoFormat: {
    height: 40,
    width: 130

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
    marginBottom: 15
  }

});

export default shoppingCartSummaryStyles;

import { StyleSheet } from 'react-native';
import { FontNames } from '../../../utils/enums';

const dashBoardStyles = StyleSheet.create({
  dashboardContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  products: {
    alignItems: 'center'
  },
  helloUserProfile: {
    marginTop: 50,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: FontNames.MontserratRegular,
    fontSize: 25
  }
});

export default dashBoardStyles;

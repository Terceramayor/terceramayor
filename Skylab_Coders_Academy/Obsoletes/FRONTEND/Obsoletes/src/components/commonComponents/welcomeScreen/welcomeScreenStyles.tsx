import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { FontNames } from '../../../utils/enums';

const welcomeScreenStyles = StyleSheet.create({
  welcomeImageContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center'

  },
  logoImage: {

    height: 100,
    width: 100,
    marginBottom: 65

  },
  obsoletesAboutTitle: {

    fontFamily: FontNames.MontserratRegular,
    fontSize: 40,
    color: 'white'

  }
});

export default welcomeScreenStyles;

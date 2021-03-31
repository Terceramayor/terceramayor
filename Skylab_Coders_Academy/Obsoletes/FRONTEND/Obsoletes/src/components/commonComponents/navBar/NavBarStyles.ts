import { StyleSheet, StatusBar } from 'react-native';
import colors from '../../../assets/colors';
import { FontNames } from '../../../utils/enums';

const NavBarStyles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.greyOne,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24
  },
  hamburgerSearchUpdatedTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  hamburgerSearchUpdatedBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  topRatedLastUpdated: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '40%',
    height: 40,
    borderRadius: 4,
    backgroundColor: colors.greyTwo
  },
  updatedRated: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: FontNames.MontserratRegular
  },
  topRatedLastUpdatedContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-around'

  },
  ratedUpdatedIndicator: {
    width: '40%',
    height: 3,
    backgroundColor: colors.background,
    marginLeft: '5%',
    marginRight: '5%'

  },

  imagesHamburger: {
    height: 30,
    width: 30
  },
  imagesLopue: {
    height: 25,
    width: 25
  },
  imagesLogIn: {
    height: 30,
    width: 30,
    marginRight: 5
  },
  imagesHamburgerMenu: {
    height: 30,
    width: 30,
    marginRight: 15

  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around'

  },
  searchInput: {
    color: 'white',
    backgroundColor: colors.white,
    paddingRight: 5,
    paddingLeft: 5,
    width: '75%',
    height: 35,
    marginRight: 15
  },
  modalContainer: {
    flexDirection: 'row',

    width: '100%',
    height: '100%'
  },
  modalInfo: {
    paddingTop: 5,
    alignItems: 'center',
    backgroundColor: 'black',
    width: '65%',
    height: '100%'
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: colors.greyOne,
    width: '90%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.background

  },
  faq: {
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.greyOne,
    width: '90%',
    height: 50

  },
  loginText: {
    marginRight: 30,
    fontSize: 12,
    fontFamily: FontNames.MontserratRegular
  },
  faqText: {
    marginRight: 34,
    fontSize: 12,
    fontFamily: FontNames.MontserratRegular
  },
  aboutObsoletes: {

    width: '100%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  logoImage: {

    width: 75,
    height: 75
  },

  obsoletesAboutTitle: {
    fontFamily: FontNames.MontserratMedium,
    fontSize: 25
  },
  obsoletesAboutText: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: FontNames.MontserratLight,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center'
  },
  modalBackToDashboard: {

    backgroundColor: colors.blackTranslucid,
    width: '35%',
    height: '100%'

  },

  faqinfo: {

    backgroundColor: colors.greyOne,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: 25,
    paddingRight: 25

  },
  faqLogoImage: {
    width: 75,
    height: 75,
    marginBottom: 65
  },

  faqQuestion: {
    width: '100%',
    fontFamily: FontNames.MontserratMedium,
    fontSize: 20,
    marginBottom: 15,
    paddingTop: 15,
    textAlign: 'center',
    lineHeight: 20,
    borderTopWidth: 1,
    borderTopColor: colors.background

  },
  faqAnswer: {
    fontFamily: FontNames.MontserratMedium,
    paddingBottom: 5,
    paddingTop: 5,
    textAlign: 'center',
    lineHeight: 25

  },
  logInSignInModalContainer: {
    flex: 1,
    backgroundColor: colors.blackTranslucid
  },
  backTomenu: {
    width: '100%',
    height: '20%',
    backgroundColor: colors.blackTranslucid

  },
  logInIconName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%'
  },
  profileButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default NavBarStyles;

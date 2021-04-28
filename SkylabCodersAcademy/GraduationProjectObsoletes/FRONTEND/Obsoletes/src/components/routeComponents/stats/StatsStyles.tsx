import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { FontNames } from '../../../utils/enums';

const StatsStyles = StyleSheet.create({
  statsRouteContainer: {
    flexDirection: 'column',
    backgroundColor: colors.background,
    height: '100%',
    alignItems: 'center'

  },
  statsContainer: {
    alignItems: 'center',
    marginTop: '2%',
    width: '95%',
    height: '79%',
    borderRadius: 5,
    backgroundColor: colors.greyOne,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8
  },
  productTextContainer: {
    borderRadius: 5,
    alignItems: 'center',
    width: '95%',
    marginTop: '2%',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.greyThree
  },
  productTitle: {

    fontFamily: FontNames.MontserratRegular,
    fontSize: 23
  },
  imageObsoletionContainer: {
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    marginTop: '2%',
    paddingTop: 15,
    paddingBottom: 15

  },
  productImage: {
    height: 125,
    width: 125,
    borderRadius: 4,
    marginRight: '5%'
  },
  obsoletion: {
    width: '35%',
    backgroundColor: colors.greyOne,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '5%'
  },
  barContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: '90%',
    position: 'relative'
  },
  bar: {
    backgroundColor: colors.background,
    height: 3,
    width: '100%'
  },
  productStats: {
    borderRadius: 5,
    alignItems: 'center',
    width: '95%',
    marginTop: '2%',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.greyThree
  },
  ownersExOwnersContainer: {
    flexDirection: 'row'

  },
  ownersExOwners: {
    fontFamily: FontNames.RobotoBold,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10
  },
  reasonDeadContainer: {

    width: '75%',
    marginTop: 5

  },
  DeathReasonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5
  },
  deathStatisticsText: {

    fontFamily: FontNames.MontserratRegular,
    fontSize: 15

  },
  feedbackNotPossibleText: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 18,
    color: colors.redText,
    textAlign: 'center'

  },
  feedbackPossibleText: {
    fontFamily: FontNames.MontserratRegular,
    fontSize: 17,
    color: colors.blueText,
    textAlign: 'center'
  }

});

export default StatsStyles;

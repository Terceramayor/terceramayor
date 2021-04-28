// eslint-disable-next-line no-use-before-define
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import NavBar from './../../commonComponents/navBar/NavBar';
import userFeedbackPosible from '../../../utils/userFeedbackPosible';
import { scoreToColor } from '../../../utils/scoreToColor';
import { barDotPossition } from '../../../utils/barDotPossition';
import { calculateOwnersExowners } from '../../../utils/calculateOwnersExowners';
import { deathStatistics } from '../../../utils/deathStatistics';
import { reduxStateInterface, StatsProps, mapStateToPropsStatsReturnInterface } from '../../../utils/interfaces';
import { NavigationRoutes, FontNames } from '../../../utils/enums';
import StatsStyles from './StatsStyles';

function Stats ({ obsoletesProductStats, userLogIn, navigation }:StatsProps) {
  const deathArray = deathStatistics(obsoletesProductStats);
  const {
    statsRouteContainer,
    statsContainer,
    productTextContainer,
    productTitle,
    imageObsoletionContainer,
    productImage,
    obsoletion,
    barContainer,
    bar,
    ownersExOwnersContainer,
    productStats,
    ownersExOwners,
    reasonDeadContainer,
    DeathReasonContainer,
    deathStatisticsText,
    feedbackNotPossibleText,
    feedbackPossibleText
  } = StatsStyles;

  const scoreColor = `hsl(${Math.floor(scoreToColor(obsoletesProductStats.obsoletion))},100%,75%)`;
  const { owners, exOwners } = calculateOwnersExowners(obsoletesProductStats);
  const { userAlreadyFeedback, isBroken } = userFeedbackPosible(obsoletesProductStats, userLogIn.username);

  const colorDependentStyle = StyleSheet.create({
    obsoletionNumberFormat: {
      fontSize: 60,
      color: scoreColor,
      fontFamily: FontNames.RobotoBold,
      paddingBottom: 5
    },
    obsoletionTextFormat: {
      fontSize: 15,
      color: scoreColor,
      fontFamily: FontNames.RobotoBold
    },
    barDot: {
      position: 'absolute',
      height: 20,
      width: 20,
      backgroundColor: scoreColor,
      borderRadius: 50,
      left: `${barDotPossition(obsoletesProductStats.obsoletion)}%`
    }

  });

  return (

    <View style={statsRouteContainer}>

      <NavBar navigation={navigation}/>

      <View style={statsContainer}>
        <View style={productTextContainer}>
          <Text style={productTitle}>{obsoletesProductStats.productName}</Text>
        </View>

        <View style={imageObsoletionContainer}>
          <Image source={{ uri: obsoletesProductStats.thumbnailUrl }} style={productImage} />

          <View style={obsoletion}>
                <Text style={colorDependentStyle.obsoletionNumberFormat}>{obsoletesProductStats.obsoletion}</Text >
                <Text style={colorDependentStyle.obsoletionTextFormat}>Obsoletion</Text >
          </View>

        </View>
        <View style={barContainer}>
          <View style={bar}></View>
          <View style={colorDependentStyle.barDot}></View>
        </View>

        <View style={productStats}>
            <View style={ownersExOwnersContainer}>
              <Text style={ownersExOwners}>{owners}</Text>
              <Text style={ownersExOwners}> Owners</Text>
              <Text style={ownersExOwners}>-</Text>
              <Text style={ownersExOwners}>{exOwners}</Text>
              <Text style={ownersExOwners}> Ex-Owners</Text>
            </View>

          <View style={reasonDeadContainer}>

              {obsoletesProductStats && (
                deathArray.map((death) => (
            <View style={DeathReasonContainer} key={death.deathReason}>
              <Text style={deathStatisticsText}>{death.deathReason}</Text>
              <Text style={deathStatisticsText}>{'   -   '}</Text>
              <Text style={deathStatisticsText}>{`${death.percentageDeathReason} %`}</Text>
              <Text style={deathStatisticsText}>{'   -   '}</Text>
              <Text style={deathStatisticsText}>in</Text>
              <Text style={deathStatisticsText}>{' '}</Text>
              <Text style={deathStatisticsText}>{`${death.averageDuration} Years`}</Text>
            </View>
                ))
              )}

          </View>

        </View>

        {((userAlreadyFeedback === true && isBroken === false) || userAlreadyFeedback === false)
          ? (
          <TouchableOpacity testID="touchableOpacity" style={productTextContainer} onPress = {() => {
            navigation.navigate(NavigationRoutes.Casuistic);
          }} >

          <Text style={feedbackPossibleText}>Submit Feedback</Text>

</TouchableOpacity>
            )
          : (
          <View style={productTextContainer}>
            <Text style={feedbackNotPossibleText}>You are already an exowner of this device</Text>
          </View>
            )}

      </View>

    </View>
  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsStatsReturnInterface => ({
  obsoletesProductStats: state.obsoletesProductStats,
  userLogIn: state.userLogIn
});

export default connect(mapStateToProps, null)(Stats);

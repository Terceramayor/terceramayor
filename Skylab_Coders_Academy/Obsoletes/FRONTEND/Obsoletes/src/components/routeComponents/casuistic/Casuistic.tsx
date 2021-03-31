// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './../../commonComponents/navBar/NavBar';
import { feedbackNew } from '../../../redux/actions/actionsObsoletesProductStats';
import { loadDashboard } from '../../../redux/actions/actionsObsoletesProductsObject';
import userFeedbackPosible from '../../../utils/userFeedbackPosible';
import loadCase from '../../../utils/loadCase';
import { reduxStateInterface, CasuisticProps, mapStateToPropsCasuisticReturnInterface } from '../../../utils/interfaces';
import { NavigationRoutes, Casuistic, AnimationControls } from '../../../utils/enums';
import CasuisticStyles from './CasuisticStyles';

function Cauistic ({ obsoletesProductStats, userLogIn, actions, navigation }:CasuisticProps) {
  const [feedbakSuccess, setFeedbakSuccess] = useState<boolean>(false);

  const {
    CasuisticRouteContainer,
    casuisticBackground,
    imageFormat,
    feedbackOption,
    boughtIt,
    broken
    , productTitle,
    productTitleContainer,
    productImage,
    failedSuccessUpperLowerContainer,
    failedSuccessContainer,
    feedbackText,
    feedbackTitle,
    feedbackTextTap
  } = CasuisticStyles;

  let feedbackPossible = { userAlreadyFeedback: false, isBroken: false };
  if (obsoletesProductStats.place === Casuistic.Obsoletes) {
    feedbackPossible = userFeedbackPosible(obsoletesProductStats, userLogIn.username);
  }

  return (

    <View style={CasuisticRouteContainer}>

      <NavBar navigation={navigation}/>

<View style={casuisticBackground}>

      <View style={productTitleContainer}>
          <Text style={productTitle}>{obsoletesProductStats.productName || obsoletesProductStats.name}</Text>
        </View>

          <Image source={{ uri: obsoletesProductStats.thumbnailUrl || obsoletesProductStats.thumbNail_url }} style={productImage} />

{(feedbackPossible.userAlreadyFeedback === false || obsoletesProductStats.place !== Casuistic.Obsoletes)
  ? (
  <TouchableOpacity testID="submitFeedback" style={feedbackOption} onPress = {() => {
    actions.feedbackNew(obsoletesProductStats, userLogIn.username);
    setFeedbakSuccess(true);
  }}>
  <Image source={require('../../../assets/images/happy.png')} style={imageFormat} ></Image>
    <Text style={boughtIt}>I just bought it</Text>
  </TouchableOpacity>
    )
  : (
  <TouchableOpacity testID = "submitAlreadyFeedback" style={feedbackOption} onPress = {() => {
    navigation.navigate(NavigationRoutes.Broken);
  }}>
        <Image source={require('../../../assets/images/sad.png')} style={imageFormat} ></Image>
          <Text style={broken}>You already own this device so, unfortnately, it just broke</Text>
        </TouchableOpacity>
    )}

</View>

 {/* =====================================FEEDBACK MODAL==================== */}

 <Modal
  animationType={AnimationControls.Fade}
  transparent={true}
  visible={feedbakSuccess}>

   <TouchableOpacity testID="feedbackOk" onPress = {() => {
     setFeedbakSuccess(false);
     actions.loadDashboard(loadCase.LAST_UPDATED);
     navigation.navigate(NavigationRoutes.Dashboard);
   }}>

    <View style={failedSuccessUpperLowerContainer}></View>
          <View style={failedSuccessContainer}>

          <Image source={require('../../../assets/images/happy.png')} style={imageFormat} />
            <Text style={feedbackTitle}>Thanks for your feedback!</Text>
            <Text style={feedbackText}> The device has been included in your gadget list as still fully functional.</Text>
            <Text style={feedbackText}>Remember to come back when it is not usable enymore and indicate the reason why. The community will appreciate it!</Text>
            <Text style={feedbackTextTap}>Tap to go back to the device stats</Text>

          </View>
    <View style={failedSuccessUpperLowerContainer}></View>

   </TouchableOpacity>

  </Modal>

    </View>

  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsCasuisticReturnInterface => ({
  obsoletesProductStats: state.obsoletesProductStats,
  userLogIn: state.userLogIn
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions: bindActionCreators({ feedbackNew, loadDashboard }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cauistic);

// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './../../commonComponents/navBar/NavBar';
import CheckBoxItem from '../../commonComponents/checkBoxItem/CheckBoxItem';
import { validateDeathReason, feedbackBroken } from '../../../redux/actions/actionsObsoletesProductStats';
import { loadDashboard } from '../../../redux/actions/actionsObsoletesProductsObject';
import { deathStatistics } from '../../../utils/deathStatistics';
import loadCase from '../../../utils/loadCase';
import { reduxStateInterface, BrokenProps, mapStateToPropsBrokenReturnInterface } from '../../../utils/interfaces';
import { NavigationRoutes, AnimationControls } from '../../../utils/enums';
import BrokenStyles from './BrokenStyles';

function Broken ({ obsoletesProductStats, userLogIn, actions, navigation, okToSubmitDeathReason }:BrokenProps) {
  const [feedbakSuccess, setFeedbakSuccess] = useState<boolean>(false);
  const [notValidFedbackModal, setNotValidFedbackModal] = useState<boolean>(false);
  const [currentDeathReason, setCurrentDeathReason] = useState<string>('');
  const [additionalReason, setAdditionalReason] = useState<boolean>(false);
  useEffect(() => {
    actions.validateDeathReason(null, null, true);
  }, []);

  const [newReasonToDie, setNewReasonToDie] = useState('');
  const deathArray = deathStatistics(obsoletesProductStats);

  function feedbackControl () {
    if (okToSubmitDeathReason === 1) {
      actions.feedbackBroken(obsoletesProductStats, userLogIn.username, currentDeathReason);
      setFeedbakSuccess(true);
    } else {
      setNotValidFedbackModal(true);
      setTimeout(() => { setNotValidFedbackModal(false); }, 2000);
    }
  }

  function succesfulNewReason () {
    actions.feedbackBroken(obsoletesProductStats, userLogIn.username, newReasonToDie);
    setFeedbakSuccess(true);
  }

  const {
    brokenRouteContainer,
    brokenBackground,
    imageFormat,
    productTitle,
    whyIsBroken,
    whyDidItBroke,
    whyIsBrokenExplanation,
    infoBlockContainer,
    formBlock,
    productImage,
    feedbackPossibleText,
    failedSuccessUpperLowerContainer,
    failedSuccessContainer,
    feedbackText,
    feedbackTitle,
    feedbackTextTap,
    productTextContainer,
    noneAvailableOption,
    failedFeedbackUpperLowerContainer,
    failedFeedbackSuccessContainer,
    feedbackFailedText,
    infoBlockContainerBack,
    inputStyle,
    infoBlockContainerNewReason
  } = BrokenStyles;

  return (

    <View style={brokenRouteContainer}>

      <NavBar navigation={navigation}/>

  <View style={brokenBackground}>

      <View style={infoBlockContainer}>
          <Text style={productTitle}>{obsoletesProductStats.productName}</Text>
        </View>

          <Image source={{ uri: obsoletesProductStats.thumbnailUrl }} style={productImage} />

          <View style={infoBlockContainer}>
            <Text style={whyIsBroken}>Why did it break?</Text>

            {deathArray.length > 0 &&

            <Text style={whyIsBrokenExplanation}>Choose one option from the list if available or define a new one.</Text>

            }
          </View>

          <View style={formBlock}>

              {deathArray.length > 0 && deathArray.map((stat, index) => (

            <CheckBoxItem key={stat.deathReason} deathReason={stat.deathReason} setCurrentDeathReason={setCurrentDeathReason}/>

              ))}

            <TouchableOpacity onPress = {() => { setAdditionalReason(true); }}>

              {(deathArray.length !== 0)
                ? (
                <Text style={noneAvailableOption}>None of the above</Text>
                  )
                : (
                <Text style={noneAvailableOption}>Click here to enter the reason why your device broke</Text>
                  )}

            </TouchableOpacity>

           </View>

{deathArray.length !== 0 &&
    <TouchableOpacity testID="touchableOpacity" style={productTextContainer} onPress = {() => {
      feedbackControl();
    } } >
 <Text style={feedbackPossibleText}>Submit Feedback</Text>
 </TouchableOpacity>

}

</View>

 {/* ===================================== VALID FEEDBACK MODAL==================== */}

 <Modal
  animationType={AnimationControls.Fade}
  transparent={true}
  visible={feedbakSuccess}>

   <TouchableOpacity onPress = {() => {
     setFeedbakSuccess(false);
     actions.loadDashboard(loadCase.LAST_UPDATED);
     navigation.navigate(NavigationRoutes.Dashboard);
   }}>

    <View style={failedSuccessUpperLowerContainer}></View>
          <View style={failedSuccessContainer}>

          <Image source={require('../../../assets/images/happy.png')} style={imageFormat} />
            <Text style={feedbackTitle}>Thanks for your feedback!</Text>
            <Text style={feedbackText}> You do not own this feedback anymore.</Text>
            <Text style={feedbackText}>Thank you for providing your obsoletion experience.</Text>
            <Text style={feedbackTextTap}>Tap to go back to the device stats</Text>

          </View>
    <View style={failedSuccessUpperLowerContainer}></View>

   </TouchableOpacity>

  </Modal>

   {/* ===================================== ADDITIONAL REASON MODAL==================== */}

 <Modal
  animationType={AnimationControls.Fade}
  transparent={true}
  visible={additionalReason}>

    <TouchableOpacity style = {infoBlockContainerBack} onPress={(text) => { setAdditionalReason(false); }} ></TouchableOpacity>

          <View style={infoBlockContainerNewReason}>
            <Text style={whyDidItBroke}>Please state the reason why your device broke</Text>
            <TextInput style={inputStyle} onChangeText={(text) => { setNewReasonToDie(text); }} placeholder="Reason to break..." ></TextInput>

            <TouchableOpacity testID="touchableOpacity" style={productTextContainer} onPress = {() => {
              actions.feedbackBroken(obsoletesProductStats, userLogIn.username, newReasonToDie);
              succesfulNewReason();
            }

            } >
            <Text style={feedbackPossibleText}>Submit Feedback</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style = {infoBlockContainerBack} onPress={(text) => { setAdditionalReason(false); }}></TouchableOpacity>

  </Modal>

   {/* =====================================NO VALID FEEDBACK MODAL==================== */}

   <Modal
   animationType={AnimationControls.Fade}
  transparent={true}
  visible={notValidFedbackModal}>

<View style={failedFeedbackUpperLowerContainer}></View>
    <View style={failedFeedbackSuccessContainer} >
      <Text style={feedbackFailedText} >Please select one reason</Text>
    </View>
    <View style={failedFeedbackUpperLowerContainer}></View>

   </Modal>

</View>

  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsBrokenReturnInterface => ({
  obsoletesProductStats: state.obsoletesProductStats,
  userLogIn: state.userLogIn,
  okToSubmitDeathReason: state.okToSubmitDeathReason
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions: bindActionCreators({ validateDeathReason, feedbackBroken, loadDashboard }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Broken);

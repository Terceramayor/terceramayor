// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { register, logIn } from '../../../redux/actions/actionsObsoletesUser';
import { loadDashboard } from '../../../redux/actions/actionsObsoletesProductsObject';
import { bindActionCreators } from 'redux';
import Dispatch, { connect } from 'react-redux';
import FeedbackModalModel from '../feedbackModalModel/FeedbackModalModel';
import logInRegisterFeedback from '../../../utils/logInRegisterFeedback';
import loadCase from '../../../utils/loadCase';
import { AnimationControls } from '../../../utils/enums';
import { reduxStateInterface, LogInSigninPropsInterface, mapStateToPropsLogInSigninReturnInterface } from '../../../utils/interfaces';
import logInSignInStyles from './logInSignInStyles';

let attemptLogin = false;

export function LogInSignin ({ userRegister, userLogIn, actions, hamburgerControls, logInSignInControls }: LogInSigninPropsInterface) {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [logInFailure, setLogInFailure] = useState<boolean>(false);

  const registeredSucces = (userRegister.result || false);
  const alreadyRegistered = (userRegister.status || false);

  const succssesfulLogInModalControl = (userLogIn.logInStatus || false);

  const {
    logInSignInContainer,
    inputStyle,
    inputsContainer,
    LogInSignInButtonsContainer,
    buttonStyle,
    logInSignIcons
  } = logInSignInStyles;

  if (alreadyRegistered === true) {
    setTimeout(() => { actions.register(null); }, 2000);
  }

  if (registeredSucces === true) {
    setTimeout(() => { actions.register(null); }, 2000);
  }

  if (userLogIn.logInStatus === false && attemptLogin === true) {
    setLogInFailure(true);
    attemptLogin = false;
    setTimeout(() => {
      setLogInFailure(false);
    }, 2000);
  }

  if (succssesfulLogInModalControl === true) {
    setTimeout(() => {
      logInSignInControls(false);
      hamburgerControls(false);
      actions.loadDashboard(loadCase.LAST_UPDATED);
    }, 2000);
  }

  return (

<View style={logInSignInContainer}>

  <View style={inputsContainer}>

      <TextInput style={inputStyle} testID="userNameInput" value={username} onChangeText={(text) => { setUserName(text); }} placeholder="User Name..." ></TextInput>
      <TextInput style={inputStyle} testID="passwordInput" value={password} onChangeText={(text) => { setPassword(text); }} placeholder="Password..." ></TextInput>

  </View>

  <TouchableOpacity testID="logInButton" style={LogInSignInButtonsContainer} onPress ={() => {
    actions.register({ username, password });
  }}>

      <Image source={require('../../../assets/images/registerModal.png')} style={logInSignIcons}/>
      <Text style={buttonStyle}>Sign In</Text>

  </TouchableOpacity>

  <TouchableOpacity testID="logIn" style={LogInSignInButtonsContainer} onPress ={() => {
    actions.logIn({ username, password });
    attemptLogin = true;
  }}>

      <Image source={require('../../../assets/images/logInModal.png')} style={logInSignIcons}/>
      <Text style={buttonStyle}>Log In</Text>

  </TouchableOpacity>

  {/* =====================================MODALS SECCTION==================== */}

  {/* =====================================REGISTRATION SUCCSESSFUL MODAL==================== */}

  <Modal
  animationType={AnimationControls.Fade}
  transparent={true}
  visible={registeredSucces}>

    <FeedbackModalModel textToDisplay={logInRegisterFeedback.REGISTRATION_SUCCESFUL} logedUserName={''}/>

  </Modal>

  {/* =====================================REGISTRATION FAILURE MODAL==================== */}

  <Modal
  animationType={AnimationControls.Fade}
  transparent={true}
  visible={alreadyRegistered}>

    <FeedbackModalModel textToDisplay={logInRegisterFeedback.REGISTRATION_FAIL} logedUserName={''}/>

  </Modal>

  {/* =====================================LOGiN SUCCESS/ALREADY LOGGED MODAL==================== */}

  <Modal
  animationType={AnimationControls.Fade}
  transparent={true}
  visible={succssesfulLogInModalControl}>

    <FeedbackModalModel textToDisplay={logInRegisterFeedback.LOGIN_SUCCESFUL} logedUserName={userLogIn.username}/>

  </Modal>

  {/* =====================================LOGiN FAILURE MODAL==================== */}

  <Modal
  animationType={AnimationControls.Fade}
  transparent={true}
  visible={logInFailure}>

    <FeedbackModalModel textToDisplay={logInRegisterFeedback.LOGIN_FAIL} logedUserName={''}/>

  </Modal>

</View>

  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsLogInSigninReturnInterface => ({
  userRegister: state.userRegister,
  userLogIn: state.userLogIn
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions: bindActionCreators({ register, logIn, loadDashboard }, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(LogInSignin);

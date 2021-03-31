// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import Dispatch, { connect } from 'react-redux';
import { loadUserProfile } from '../../../redux/actions/actionsObsoletesUserProfile';
import { logOut } from '../../../redux/actions/actionsObsoletesUser';
import { loadDashboard, searchProduct } from '../../../redux/actions/actionsObsoletesProductsObject';
import LogInSignIn from '../logInSignIn/LogInSignIn';
import loadCase from '../../../utils/loadCase';
import spyOnPressFunction from './spyOnPressFunction';
import { reduxStateInterface, NavBarPropsInterface, mapStateToPropsNavBarReturnInterface } from '../../../utils/interfaces';
import { NavigationRoutes, AnimationControls } from '../../../utils/enums';
import NavBarStyles from './NavBarStyles';

function NavBar ({ obsoletesProductsObject, actions, navigation, userLogIn }:NavBarPropsInterface) {
  const [modalHamburgerVisibility, setModalHamburgerVisibility] = useState<boolean>(false);
  const [modalFaqVisibility, setmodalFaqVisibility] = useState<boolean>(false);
  const [modalLogSignInVisibility, setModalLogSignInVisibility] = useState<boolean>(false);
  const [searchProductQuery, setSearchProductQuery] = useState<string>('');

  const {
    ratedUpdatedIndicator,
    updatedRated,
    navBarContainer,
    imagesLopue,
    imagesHamburger,
    searchContainer,
    searchInput,
    hamburgerSearchUpdatedTop,
    hamburgerSearchUpdatedBottom,
    topRatedLastUpdated,
    modalContainer,
    modalInfo,
    modalBackToDashboard,
    login,
    faq,
    faqinfo,
    loginText,
    faqText,
    aboutObsoletes,
    logoImage,
    obsoletesAboutTitle,
    obsoletesAboutText,
    faqQuestion,
    faqAnswer,
    faqLogoImage,
    logInSignInModalContainer,
    backTomenu,
    logInIconName,
    imagesLogIn,
    imagesHamburgerMenu,
    profileButton
  } = NavBarStyles;

  const { casuistic } = obsoletesProductsObject;

  const ratedUpdatedStyle = StyleSheet.create({
    ratedUpdatedIndicatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: (casuistic === loadCase.TOP_RATED) ? 'flex-end' : 'flex-start',
      width: '100%'
    }
  });

  const logInTextControl = (userLogIn.logInStatus === true) ? 'Logout & Login again' : 'LogIn';

  async function loginSignInAction () {
    if (userLogIn.logInStatus === true) {
      await actions.logOut(userLogIn);

      setModalLogSignInVisibility(true);
    } else {
      setModalLogSignInVisibility(true);
    }
  }

  return (

      <View style={navBarContainer}>

        <View style={hamburgerSearchUpdatedTop}>
          <TouchableOpacity testID="touchableOpacity" onPress={() => { setModalHamburgerVisibility(true); setmodalFaqVisibility(false); spyOnPressFunction(); }}>
            <Image source={require('../../../assets/images/hamburger.png')} style={imagesHamburger} />
          </TouchableOpacity>

          <View style={logInIconName}>

            {userLogIn.logInStatus && (

          <TouchableOpacity testID="loadUserProfile" style={profileButton} onPress={() => {
            actions.loadUserProfile(userLogIn.username);
            navigation.navigate(NavigationRoutes.Profile);
          }}>
              <Image source={require('../../../assets/images/logIn.png')} style={imagesLogIn} />
              <Text >{userLogIn.username}</Text>
          </TouchableOpacity>

            )}

            {!userLogIn.logInStatus && (

            <>

              <Text >Not logged</Text>
            </>

            )}

          </View>

          <View style={searchContainer}>
              <TextInput value={searchProductQuery} testID="searchProductinput" onChangeText={(text) => {
                setSearchProductQuery(text);
              }} placeholder="search..." style={searchInput} ></TextInput>
              <TouchableOpacity testID="searchProduct" onPress={() => {
                actions.searchProduct(searchProductQuery);
                navigation.navigate(NavigationRoutes.Dashboard);
              }}>
              <Image source={require('../../../assets/images/loupe.png')} style={imagesLopue}/>
              </TouchableOpacity>
          </View>
        </View>

        <View style={hamburgerSearchUpdatedBottom}>

            <TouchableOpacity testID="touchableOpacityReduxActionLoadDashboard" style={topRatedLastUpdated} onPress={() => {
              actions.loadDashboard(loadCase.LAST_UPDATED);
              navigation.navigate(NavigationRoutes.Dashboard);
            }}>
              <Text style={updatedRated}>Last updated</Text>
            </TouchableOpacity >
            <TouchableOpacity testID="touchableOpacityReduxActionLoadDashboard" style={topRatedLastUpdated} onPress={() => {
              actions.loadDashboard(loadCase.TOP_RATED);
              navigation.navigate(NavigationRoutes.Dashboard);
            }}>
              <Text style={updatedRated}>Top rated</Text>
            </TouchableOpacity>

        </View>

        <View style={ratedUpdatedStyle.ratedUpdatedIndicatorContainer}>

            <View style={ratedUpdatedIndicator}></View >

        </View>
{/* ============================================MODAL WINDOWS SECTION========================= */}

{/* ============================================HAMBURGUER MENU MODAL========================= */}

        <Modal animationType={AnimationControls.Fade}
        transparent={true}
        visible={modalHamburgerVisibility}>

          <View style={modalContainer}>
            <View style={modalInfo}>

              <View style={login}>
                <TouchableOpacity testID="touchableOpacityReduxActionLogSignIn" style={login} onPress={() => {
                  loginSignInAction();
                }}>
                <Image source={require('../../../assets/images/logIn.png')} style={imagesHamburgerMenu}/>
              <Text style={loginText} >{logInTextControl}</Text>
                </TouchableOpacity>
              </View>

              <View style={faq}>
                <TouchableOpacity testID="touchableOpacity" style={faq} onPress={() => { setmodalFaqVisibility(true); spyOnPressFunction(); }}>
                <Image source={require('../../../assets/images/faq.png')} style={imagesHamburgerMenu}/>
                    <Text style={faqText}>FAQ</Text>
                </TouchableOpacity>
              </View>

              <View style={aboutObsoletes}>

                <Image source={require('../../../assets/images/logo.png')} style={logoImage}/>
                <Text style={obsoletesAboutTitle}>Obsoletes</Text>
                <Text style={obsoletesAboutText}>Welcome to Oboletes, the place to share your obsolescence experience. Though this App you can provide feedback regarding why your gadgets are not usable anymore so that other users can take better bying decisions.</Text>

              </View>

  {/* ============================================REGISTER & SIGNIN MODAL========================= */}
              <Modal animationType={AnimationControls.Slide}
              transparent={true}
              visible={modalLogSignInVisibility}
              >

                <View style={logInSignInModalContainer}>

                  <TouchableOpacity testID="touchableOpacity" style = {backTomenu} onPress={() => {
                    setModalLogSignInVisibility(false);
                    setmodalFaqVisibility(false);
                    spyOnPressFunction();
                  }}>

                  </TouchableOpacity>

                    <LogInSignIn hamburgerControls={setModalHamburgerVisibility} logInSignInControls={setModalLogSignInVisibility}/>

                  <TouchableOpacity testID="touchableOpacity" style = {backTomenu} onPress={() => {
                    setModalLogSignInVisibility(false);
                    setmodalFaqVisibility(false);
                    spyOnPressFunction();
                  }}>

                  </TouchableOpacity>

                </View>

              </Modal>

  {/* ============================================END REGISTER & SIGNIN MODAL========================= */}

  {/* ============================================FAQ MODAL========================= */}

              <Modal animationType={AnimationControls.Slide}
              transparent={true}
              visible={modalFaqVisibility}
              >

               <TouchableOpacity testID="touchableOpacity" onPress={() => { setmodalFaqVisibility(false); spyOnPressFunction(); }}>
                    <View style={faqinfo}>
                      <Image source={require('../../../assets/images/logo.png')} style={faqLogoImage}/>
                      <Text style={faqQuestion}>How can I use Obsoletes?</Text>
                      <Text style={faqAnswer}>Your can state when you bought a new gadget. When it stops working, you can provide feedback about the reason why it died.</Text>
                      <Text style={faqQuestion}>What does the obsoletion score measure?</Text>
                      <Text style={faqAnswer}>The obsoletion score is an idex that measures how friendly a devide is in terms of obsolescence. The lower, the better.</Text>
                      <Text style={faqQuestion}>How is the obsoletion score calculated?</Text>
                      <Text style={faqAnswer}>The obsoletion score takes into acount the percentage of ex-users of a device vs. the current owners, the amount of death reasons and the average device durability.</Text>

                    </View>
                    </TouchableOpacity>

              </Modal>

  {/* ============================================END FAQ MODAL========================= */}

            </View>
            <TouchableOpacity testID="touchableOpacity" style={modalBackToDashboard} onPress={() => { setModalHamburgerVisibility(false); setmodalFaqVisibility(false); spyOnPressFunction(); }}></TouchableOpacity>
          </View>

        </Modal>

{/* ============================================END HAMBURGUER MENU MODAL========================= */}

      </View>
  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsNavBarReturnInterface => ({
  obsoletesProductsObject: state.obsoletesProductsObject,
  userLogIn: state.userLogIn
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions: bindActionCreators({ loadDashboard, logOut, searchProduct, loadUserProfile }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadUserProfile } from '../../../redux/actions/actionsObsoletesUserProfile';
import NavBar from './../../commonComponents/navBar/NavBar';
import ProductProfile from './../productProfile/ProductProfile';
import { reduxStateInterface, mapStateToPropsProfileReturnInterface, ProfileProps } from '../../../utils/interfaces';
import profileStyles from './profileStyles';

function Profile ({ userprofileProducts, navigation, userLogIn, actions }:ProfileProps) {
  useEffect(() => {
    actions.loadUserProfile(userLogIn.username);
  }, [userLogIn]);

  const {
    componentContainer,
    scrollViewFormat,
    helloUserProfile
  } = profileStyles;
  const { productsArray } = userprofileProducts;
  if (userLogIn.logInStatus === false) {
    return (
    <View style={componentContainer}>
  <NavBar navigation={navigation}/>
    <Text style={helloUserProfile}>No user signed in!</Text>
    </View>
    );
  }

  return (

<View style={componentContainer}>
  <NavBar navigation={navigation}/>

  {(productsArray?.length < 1)
    ? (

<Text style={helloUserProfile}>You have not yet provided feedback of any product!</Text>

      )
    : (
      <>
      <Text style={helloUserProfile}> Hello {userLogIn.username}, here you have all the products you have rated</Text>

      <ScrollView style={scrollViewFormat}>
        {productsArray?.map((product) => (

          <ProductProfile key={product.productName} singleProduct={product} navigation={navigation}/>

        ))}
        </ScrollView>
        </>
      )}

</View>
  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsProfileReturnInterface => ({
  userprofileProducts: state.userprofileProducts,
  userLogIn: state.userLogIn

});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators({ loadUserProfile }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

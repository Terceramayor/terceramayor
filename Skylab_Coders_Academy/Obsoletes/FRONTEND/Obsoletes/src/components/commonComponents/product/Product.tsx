// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadProduct } from '../../../redux/actions/actionsObsoletesProductStats';
import FeedbackModalModel from './../../commonComponents/feedbackModalModel/FeedbackModalModel';
import { calculateOwnersExowners } from '../../../utils/calculateOwnersExowners';
import { formatDate } from '../../../utils/formatDate';
import { scoreToColor } from '../../../utils/scoreToColor';
import logInRegisterFeedback from './../../../utils/logInRegisterFeedback';
import { NavigationRoutes, FontNames, Casuistic, AnimationControls } from '../../../utils/enums';
import { reduxStateInterface, ProductPropsInterface, mapStateToPropsProductsReturnInterface } from '../../../utils/interfaces';
import ProductStyles from './ProductStyles';

export function Product ({ singleProduct, navigation, userLogIn, actions }: ProductPropsInterface) {
  const {
    statsStyles,
    productContainer,
    productImage,
    productInfo,
    ownersExownersStyles,
    ownersStyles,
    exownersStyles,
    dateAndObsoletion,
    obsoletion,
    dateFormat,
    productName,
    ownersExTextStyles,
    productInfoMegaco,
    statsStylesNotAvailable
  } = ProductStyles;

  const [pleaseLogIn, setPleaseLogIn] = useState<boolean>(false);
  let obsoletionStyle;
  let ownersExOwnersAnalysis = { owners: 0, exOwners: 0 };
  if (singleProduct.place === Casuistic.Obsoletes) {
    ownersExOwnersAnalysis = calculateOwnersExowners(singleProduct);
    const scoreColor = `hsl(${Math.floor(scoreToColor(singleProduct.obsoletion))},100%,75%)`;

    obsoletionStyle = StyleSheet.create({
      obsoletionNumberFormat: {
        fontSize: 40,
        color: scoreColor,
        fontFamily: FontNames.RobotoBold,
        paddingBottom: 5
      },
      obsoletionTextFormat: {
        fontSize: 12,
        color: scoreColor,
        fontFamily: FontNames.RobotoBold
      }

    });
  }

  if (pleaseLogIn === true) {
    setTimeout(() => {
      setPleaseLogIn(false);
    }, 2000);
  }

  return (

<>
{(singleProduct.place === Casuistic.Obsoletes)
  ? (

  <TouchableOpacity testID="touchableOpacityObsoletes" style={productContainer} onPress = {() => {
    if (userLogIn.logInStatus === true) {
      navigation.navigate(NavigationRoutes.Stats);
      actions.loadProduct(singleProduct);
    } else {
      setPleaseLogIn(true);
    }
  }} >

      <Image source={{ uri: singleProduct.thumbnailUrl }} style={productImage} />

        <View style={productInfo}>

          <Text style={productName}>{singleProduct.productName}</Text >

          <View style={ownersExownersStyles}>

            <View style={ownersStyles}>
              <Text style={ownersExTextStyles}>Owners </Text >
              <Text style={ownersExTextStyles}>{ownersExOwnersAnalysis.owners}</Text >
            </View>

            <View style={exownersStyles}>
              <Text style={ownersExTextStyles}>Ex-owners</Text >
              <Text style={ownersExTextStyles}>{ownersExOwnersAnalysis.exOwners}</Text >
            </View>

          </View>

          <Text style={statsStyles}>check stats</Text >

        </View>

        <View style={dateAndObsoletion} >
          <Text style={dateFormat}>{formatDate(singleProduct.updatedDate)}</Text >

          <View style={obsoletion}>
              <Text style={obsoletionStyle.obsoletionNumberFormat}>{singleProduct.obsoletion}</Text >
              <Text style={obsoletionStyle.obsoletionTextFormat}>Obsoletion</Text >
          </View>

        </View>

      </TouchableOpacity>

    )
  : (

    <TouchableOpacity testID="touchableOpacityMegaCo" style={productContainer} onPress = {() => {
      if (userLogIn.logInStatus === true) {
        navigation.navigate(NavigationRoutes.Casuistic);
        actions.loadProduct(singleProduct);
      } else {
        setPleaseLogIn(true);
      }
    }} >

        <Image source={{ uri: singleProduct.thumbNail_url }} style={productImage} />

          <View style={productInfoMegaco}>

            <Text style={productName}>{singleProduct.name}</Text >
            <Text style={statsStylesNotAvailable}>Device not yet rated</Text >
          </View>

        </TouchableOpacity>

    )}

{/* ======================PLEASE LOGIN MODAL====================== */}

<Modal animationType={AnimationControls.Fade}
transparent={true}
visible={pleaseLogIn}>

< FeedbackModalModel textToDisplay={logInRegisterFeedback.LOGGIN_REQUIRED} logedUserName={''}/>

</Modal>

{/* ======================END OF PLEASE LOGIN MODAL====================== */}

</>
  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsProductsReturnInterface => ({
  userLogIn: state.userLogIn
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions: bindActionCreators({ loadProduct }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

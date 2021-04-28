// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadProduct } from '../../../redux/actions/actionsObsoletesProductStats';
import { scoreToColor } from '../../../utils/scoreToColor';
import { ProductProfileProps } from '../../../utils/interfaces';
import { FontNames, NavigationRoutes } from '../../../utils/enums';
import productProfileStyles from './productProfileStyles';

function ProductProfile ({ singleProduct, navigation, actions }:ProductProfileProps) {
  const {
    productContainer,
    productDataContainer,
    obsoletionContainer,
    productDataNameTextFormating,
    productDataBrandTextFormating,
    productDataCategoryTextFormating,
    obsoletionTextFormating
  } = productProfileStyles;

  const scoreColor = `hsl(${Math.floor(scoreToColor(singleProduct.obsoletion))},100%,75%)`;

  const obsoletionStyle = StyleSheet.create({
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

  return (
<>
          <TouchableOpacity testID="profileGoToStats" style ={productContainer} onPress = {() => {
            actions.loadProduct(singleProduct);
            navigation.navigate(NavigationRoutes.Stats);
          }}>

            <View style ={productDataContainer}>
              <Text style={productDataNameTextFormating}>{singleProduct.productName}</Text>
              <Text style={productDataBrandTextFormating}>{singleProduct.brand}</Text>
              <Text style={productDataCategoryTextFormating}>{singleProduct.category}</Text>
            </View>
            <View style ={obsoletionContainer}>
              <Text style = {obsoletionStyle.obsoletionNumberFormat}>{singleProduct.obsoletion}</Text>
              <Text style={obsoletionTextFormating}>Obsoletion</Text>
            </View >
          </TouchableOpacity>
</>
  );
}

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions: bindActionCreators({ loadProduct }, dispatch)
});

export default connect(null, mapDispatchToProps)(ProductProfile);

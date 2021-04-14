// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import {
  View, Image, Text, TouchableOpacity, StyleSheet, Modal
} from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteProduct } from '../../redux/actions/productsRelatedActions';
import itemStyles from './itemStyles';

export function Product({ product, storeName, actions }) {
  const {
    itemContainer,
    itemDataContainer,
    itemImage,
    itemCartDetails,
    itemName,
    currentStatusInfo,
    subtotalContainer,
    itemQuantityPrice

  } = itemStyles;

  const { attributes: itemInfo } = product;

  return (

    <View style={itemContainer}>

      <View style={itemDataContainer}>

        <Image source={{ uri: itemInfo.image_url }} style={itemImage} />

        <View style={itemCartDetails}>
          <Text style={itemName}>
            {itemInfo.name}
          </Text>

          <View style={itemQuantityPrice}>

            <View style={currentStatusInfo}>

              <Text>Precio Unidad:</Text>
              <Text>Cantidad:</Text>

            </View>

            <View style={currentStatusInfo}>

              <Text>23,4</Text>
              <Text>3</Text>

            </View>

            <View style={subtotalContainer}>

              <Text>Subtotal</Text>
              <Text>234,43 Eur</Text>

            </View>
          </View>
        </View>

      </View>

    </View>

  );
}

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions: bindActionCreators({ deleteProduct }, dispatch)
});

export default connect(null, mapDispatchToProps)(Product);

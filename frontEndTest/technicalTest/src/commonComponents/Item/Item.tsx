// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
  View, Image, Text, TouchableOpacity
} from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseDecreaseQuantity } from '../../redux/actions/productsRelatedActions';
import itemStyles from './itemStyles';
import { operation, productCasuistic } from '../../utils/noMagicStrings';
import { ItemProps, mapStateToPropsReturnInterface, reduxStateInterface } from '../../utils/interfaces';

export function Item({
  product, storeData, shoppingCart, actions, casuistic
}:ItemProps) {
  const {
    itemContainer,
    itemDataContainer,
    itemImage,
    itemCartDetails,
    itemName,
    currentStatusInfo,
    subtotalContainer,
    itemQuantityPrice,
    imagesAddRemove,
    quantityControl,
    quantityText,
    itemPriceStore,
    subtotalContent,
    priceCategories,
    priceQuantity,
    addToCartText

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
          <Text style={itemPriceStore}>{storeData.storename}</Text>

          <View style={itemQuantityPrice}>

            <View style={currentStatusInfo}>

              <Text style={priceCategories}>Precio Unidad:</Text>
              {casuistic === productCasuistic.shoppingCartSummary
              && (<Text style={priceQuantity}>Cantidad:</Text>)}

            </View>

            <View style={currentStatusInfo}>

              <Text style={priceCategories}>{itemInfo.current_unit_price}</Text>

              <View style={quantityControl}>
                { (casuistic === productCasuistic.shoppingCartSummary) ? (
                  <>
                    <TouchableOpacity
                      testID="decreaseButton"
                      onPress={() => {
                        actions.increaseDecreaseQuantity(
                          product.id, storeData.storeId, shoppingCart, operation.delete
                        );
                      }}
                    >
                      <Image source={require('../../assets/images/menos.png')} style={imagesAddRemove} />

                    </TouchableOpacity>
                    <Text style={quantityText}>{itemInfo.quantity}</Text>
                    <TouchableOpacity
                      testID="increaseButton"
                      onPress={() => {
                        actions.increaseDecreaseQuantity(
                          product.id, storeData.storeId, shoppingCart, operation.add
                        );
                      }}
                    >
                      <Image source={require('../../assets/images/mas.png')} style={imagesAddRemove} />

                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity
                    testID="addToCarButton"
                    onPress={() => {
                      actions.increaseDecreaseQuantity(
                        product.id, storeData.storeId, shoppingCart, operation.add
                      );
                    }}
                  >
                    <Text style={addToCartText}>Añadir a la cesta</Text>
                  </TouchableOpacity>
                )}

              </View>
            </View>

          </View>
          {casuistic === productCasuistic.shoppingCartSummary && (
          <View style={subtotalContainer}>

            <Text style={subtotalContent}>Subtotal</Text>
            <Text style={subtotalContent}>{`${itemInfo.current_unit_price * itemInfo.quantity} Euros`}</Text>

          </View>
          )}
        </View>

      </View>

    </View>

  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsReturnInterface => ({
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions: bindActionCreators({ increaseDecreaseQuantity }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);

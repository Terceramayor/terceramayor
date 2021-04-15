// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import {
  View, ScrollView, Text, TouchableOpacity
} from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../../commonComponents/Item/Item';
import { increaseDecreaseQuantity } from '../../redux/actions/productsRelatedActions';
import { productCasuistic, navigationRoutes } from '../../utils/noMagicStrings';

import buyProductsStyles from './buyProductsStyles';

function BuyProducts({ shoppingCart, actions, navigation }) {
  const {
    buyContainer,
    backToCartText
  } = buyProductsStyles;
  return (
    <View style={buyContainer}>

      {shoppingCart.data.stores.data.map((store) => (

        store.relationships.items.map((product) => (

          <Item
            key={product.id}
            product={product}
            storeData={{ storename: store.attributes.name, storeId: store.id }}
            casuistic={productCasuistic.buy}
          />

        ))

      ))}

      <TouchableOpacity

        onPress={() => {
          navigation.navigate(navigationRoutes.ShoppingCart);
        }}
      >
        <Text style={backToCartText}>Back</Text>
      </TouchableOpacity>
    </View>

  );
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ increaseDecreaseQuantity }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyProducts);

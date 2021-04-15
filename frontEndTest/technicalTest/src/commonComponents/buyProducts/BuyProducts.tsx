// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Item from '../../commonComponents/Item/Item';
import { productCasuistic, navigationRoutes } from '../../utils/noMagicStrings';
import { buyProductsStylesyProps, mapStateToPropsReturnInterface, reduxStateInterface } from '../../utils/interfaces';

import buyProductsStyles from './buyProductsStyles';

function BuyProducts({ shoppingCart, navigation }:buyProductsStylesyProps) {
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
        testID="backToCartButton"
        onPress={() => {
          navigation.navigate(navigationRoutes.ShoppingCart);
        }}
      >
        <Text style={backToCartText}>Revisar Cesta</Text>
      </TouchableOpacity>
    </View>

  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsReturnInterface => ({
  shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps, null)(BuyProducts);

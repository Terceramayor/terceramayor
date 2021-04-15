// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
  View, Image, Text, TouchableOpacity
} from 'react-native';
import Dispatch, { connect } from 'react-redux';
import Item from '../../commonComponents/Item/Item';
import { productCasuistic, navigationRoutes } from '../../utils/noMagicStrings';

import shoppingCartSummaryStyles from './shoppingCartSummaryStyles';

function ShoppingCartSummary({ shoppingCart, navigation }) {
  const {
    shoppingCartContainer,
    cartSummaryContainer,
    cartSummaryText,
    continueShoppingText,
    shoppingCartIcon
  } = shoppingCartSummaryStyles;
  return (

    <View style={shoppingCartContainer}>
      <View style={cartSummaryContainer}>
        <Image source={require('../../assets/images/shoppingCart.png')} style={shoppingCartIcon} />
        <Text style={cartSummaryText}>Resumen de tu cesta</Text>
        <TouchableOpacity
          testID="navogateToContinueShoppingButton"
          onPress={() => {
            navigation.navigate(navigationRoutes.ContinueShopping);
          }}
        >
          <Text style={continueShoppingText}>Seguir comprando</Text>
        </TouchableOpacity>
      </View>

      <View>

        {shoppingCart.data.stores.data.map((store) => (

          store.relationships.items.map((product) => (

            product.attributes.quantity > 0
            && (
            <Item
              key={product.id}
              product={product}
              storeData={{ storename: store.attributes.name, storeId: store.id }}
              casuistic={productCasuistic.shoppingCartSummary}
            />
            )

          ))

        ))}

      </View>

    </View>

  );
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps, null)(ShoppingCartSummary);

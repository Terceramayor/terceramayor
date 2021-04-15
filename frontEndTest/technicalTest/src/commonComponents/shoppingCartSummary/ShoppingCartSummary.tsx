// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import {
  View, ScrollView, Text, TouchableOpacity
} from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../../commonComponents/Item/Item';
import loadShoppingCart from '../../redux/actions/productsRelatedActions';
import { productCasuistic, navigationRoutes } from '../../utils/noMagicStrings';

import shoppingCartSummaryStyles from './shoppingCartSummaryStyles';

function ShoppingCartSummary({ shoppingCart, actions, navigation }) {
  const {
    shoppingCartContainer, cartSummaryContainer, cartSummaryText, continueShoppingText
  } = shoppingCartSummaryStyles;
  return (

    <View style={shoppingCartContainer}>
      <View style={cartSummaryContainer}>
        <Text style={cartSummaryText}>Resumen de tu cesta</Text>
        <TouchableOpacity onPress={() => {
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

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators({ loadShoppingCart }, dispatch)
// });

export default connect(mapStateToProps, null)(ShoppingCartSummary);

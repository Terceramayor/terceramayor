// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import {
  View, ScrollView, Text, TouchableOpacity
} from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../../commonComponents/Item/Item';
import loadShoppingCart from '../../redux/actions/productsRelatedActions';

import shoppingCartStyles from './shoppingCartStyles';

function ShoppingCart({ shoppingCart, actions, navigation }) {
  useEffect(() => {
    actions.loadShoppingCart();
  }, []);

  const {
    shoppingCartContainer, cartSummaryContainer, cartSummaryText, continueShoppingText
  } = shoppingCartStyles;

  return (

    <View style={shoppingCartContainer}>
      <View style={cartSummaryContainer}>
        <Text style={cartSummaryText}>Resumen de tu cesta</Text>
        <TouchableOpacity>
          <Text style={continueShoppingText}>Seguir comprando</Text>
        </TouchableOpacity>
      </View>

      <View>

        {shoppingCart?.data && shoppingCart.data.stores.data.map((store) => (

          store.relationships.items.map((product) => (

            <Item key={product.id} product={product} storeName={store.attributes.name} />

          ))

        ))}

      </View>

    </View>

  );
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadShoppingCart }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

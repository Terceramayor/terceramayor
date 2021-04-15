// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import {
  View, ScrollView, Text, TouchableOpacity
} from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../../commonComponents/Item/Item';
import loadShoppingCart from '../../redux/actions/productsRelatedActions';
import ShoppingCartSummary from '../../commonComponents/shoppingCartSummary/ShoppingCartSummary';
import OrderSummary from '../../commonComponents/orderSummary/OrderSummary';
import shoppingCartStyles from './shoppingCartStyles';
import Header from '../../commonComponents/header/Header';

function ShoppingCart({ shoppingCart, actions, navigation }) {
  useEffect(() => {
    actions.loadShoppingCart();
  }, []);
  return (
    <>

      {shoppingCart?.data
    && (
    <>

      <Header />

      <ShoppingCartSummary navigation={navigation} />

      <OrderSummary />
    </>
    )}
    </>
  );
}
const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadShoppingCart }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

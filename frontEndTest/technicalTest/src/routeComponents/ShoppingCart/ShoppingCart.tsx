// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import {
  ImageBackground, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadShoppingCart } from '../../redux/actions/productsRelatedActions';
import ShoppingCartSummary from '../../commonComponents/shoppingCartSummary/ShoppingCartSummary';
import OrderSummary from '../../commonComponents/orderSummary/OrderSummary';
import Header from '../../commonComponents/header/Header';
import { ShoppingCartProps, mapStateToPropsReturnInterface, reduxStateInterface } from '../../utils/interfaces';

function ShoppingCart ({ shoppingCart, actions, navigation }:ShoppingCartProps) {
  useEffect(() => {
    actions.loadShoppingCart();
  }, []);

  const styles = StyleSheet.create({
    backgroundImage: {

      flex: 1,
      resizeMode: 'cover'
    }
  });

  return (
    <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/bakcground.png')}>
      {shoppingCart?.data &&
    (
    <>
      <Header />
      <ShoppingCartSummary navigation={navigation} />
      <OrderSummary />
    </>
    )}
    </ImageBackground>
  );
}
const mapStateToProps = (state:reduxStateInterface):mapStateToPropsReturnInterface => ({
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = (dispatch:any) => ({
  actions: bindActionCreators({ loadShoppingCart }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

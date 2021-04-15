// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseDecreaseQuantity } from '../../redux/actions/productsRelatedActions';
import { productCasuistic } from '../../utils/noMagicStrings';
import Item from '../../commonComponents/Item/Item';
import BuyProducts from '../../commonComponents/buyProducts/BuyProducts';
import continueShoppingStyles from './continueShoppingStyles';
import Header from '../../commonComponents/header/Header';

function ContinueShopping({ navigation }) {
  const styles = StyleSheet.create({
    backgroundImage: {

      flex: 1,
      resizeMode: 'cover'
    }
  });
  return (
    <ImageBackground style={styles.backgroundImage} source={require('../../assets/icons/bakcground.png')}>
      <Header />

      <BuyProducts navigation={navigation} />
    </ImageBackground>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ increaseDecreaseQuantity }, dispatch)
});

export default connect(null, mapDispatchToProps)(ContinueShopping);

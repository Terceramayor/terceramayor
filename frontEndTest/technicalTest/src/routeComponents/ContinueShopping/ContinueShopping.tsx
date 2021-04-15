// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseDecreaseQuantity } from '../../redux/actions/productsRelatedActions';
import BuyProducts from '../../commonComponents/buyProducts/BuyProducts';
import Header from '../../commonComponents/header/Header';
import { ContinueShoppingProps } from '../../utils/interfaces';

export default function ContinueShopping({ navigation }:ContinueShoppingProps) {
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover'
    }
  });
  return (
    <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/bakcground.png')}>
      <Header />
      <BuyProducts navigation={navigation} />
    </ImageBackground>
  );
}

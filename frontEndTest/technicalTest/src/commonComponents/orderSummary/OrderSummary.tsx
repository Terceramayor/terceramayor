// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import {
  View, ScrollView, Text, TouchableOpacity
} from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loadShoppingCart from '../../redux/actions/productsRelatedActions';
import oderSumarryCosts from '../../utils/oderSumarryCosts';

import orderSummaryStyles from './orderSummaryStyles';

function OrderSummary({ shoppingCart, actions }) {
  const {
    orderSummaryContainer, orderSummaryTitle, SummaryContainer, keyDataBlock, valueDataBlock, toPayContainer, toPay
  } = orderSummaryStyles;

  const { total, gross, taxes } = oderSumarryCosts(shoppingCart);

  return (

    <View style={orderSummaryContainer}>
      <Text style={orderSummaryTitle}>Resumen del pedido</Text>
      <View style={SummaryContainer}>
        <View style={keyDataBlock}>
          <Text>Total de productos (IVA incluido)</Text>
          <Text>Total de envío</Text>
          <Text>Total sin IVA</Text>
          <Text>Total de impuestos</Text>
        </View>
        <View style={valueDataBlock}>
          <Text>{`${total} €`}</Text>
          <Text>Envío gratuito</Text>
          <Text>{`${gross} €`}</Text>
          <Text>{`${taxes} €`}</Text>
        </View>
      </View>

      <View style={toPayContainer}>
        <Text style={toPay}>Total a pagar</Text>
        <Text style={toPay}>{`${total} €`}</Text>
      </View>
    </View>

  );
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps, null)(OrderSummary);

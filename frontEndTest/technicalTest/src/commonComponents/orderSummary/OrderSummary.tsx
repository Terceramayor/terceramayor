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
    orderSummaryContainer, orderSummaryTitle, SummaryContainer, keyDataBlock, valueDataBlock, toPayContainer, toPay, summaryText
  } = orderSummaryStyles;

  const { total, gross, taxes } = oderSumarryCosts(shoppingCart);

  return (

    <View style={orderSummaryContainer}>
      <Text style={orderSummaryTitle}>Resumen del pedido</Text>
      <View style={SummaryContainer}>
        <View style={keyDataBlock}>
          <Text style={summaryText}>Total de productos (IVA incluido)</Text>
          <Text style={summaryText}>Total de envío</Text>
          <Text style={summaryText}>Total sin IVA</Text>
          <Text style={summaryText}> Total de impuestos</Text>
        </View>
        <View style={valueDataBlock}>
          <Text style={summaryText}>{`${total} €`}</Text>
          <Text style={summaryText}>Envío gratuito</Text>
          <Text style={summaryText}>{`${gross} €`}</Text>
          <Text style={summaryText}>{`${taxes} €`}</Text>
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

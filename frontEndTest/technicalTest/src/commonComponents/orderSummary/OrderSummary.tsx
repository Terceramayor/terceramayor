// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text } from 'react-native';
import Dispatch, { connect } from 'react-redux';
import oderSumarryCosts from '../../utils/oderSumarryCosts';
import orderSummaryStyles from './orderSummaryStyles';
import { OrderSummaryProps, reduxStateInterface, mapStateToPropsReturnInterface } from '../../utils/interfaces';

function OrderSummary({ shoppingCart }:OrderSummaryProps) {
  const {
    orderSummaryContainer,
    orderSummaryTitle,
    SummaryContainer,

    valueDataBlock,
    toPayContainer,
    toPay,
    summaryText
  } = orderSummaryStyles;

  const { total, gross, taxes } = oderSumarryCosts(shoppingCart);

  return (

    <View style={orderSummaryContainer}>
      <Text style={orderSummaryTitle}>Resumen del pedido</Text>
      <View style={SummaryContainer}>
        <View>
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

const mapStateToProps = (state:reduxStateInterface)
:mapStateToPropsReturnInterface => ({
  shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps, null)(OrderSummary);

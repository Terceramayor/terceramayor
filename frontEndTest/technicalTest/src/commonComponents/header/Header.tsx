// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import {
  View, Image, Text, TouchableOpacity, Modal
} from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loadShoppingCart from '../../redux/actions/productsRelatedActions';

import headerStyles from './headerStyles';

export default function Header() {
  const [contactModal, setContactModal] = useState(false);
  const [createAccount, setcreateAccount] = useState(false);

  const {
    logoFormat,
    headerContainer,
    headerMenu,
    headerMenuItem,
    contactText,
    contactContainer
  } = headerStyles;

  return (

    <View style={headerContainer}>

      <Image source={require('../../assets/icons/logo.png')} style={logoFormat} />

      <View style={headerMenu}>
        <TouchableOpacity onPress={() => {
          setContactModal(true);
        }}
        >
          <Text style={headerMenuItem}>Contacto</Text>
        </TouchableOpacity>
        <TouchableOpacity>

          <Text style={headerMenuItem}>Crea tu cuenta</Text>
        </TouchableOpacity>
      </View>

      {/* =====================================Contact Modal==================== */}

      <Modal
        animationType="fade"
        transparent={false}
        visible={contactModal}
      >
        <TouchableOpacity onPress={() => {
          setContactModal(false);
        }}
        >
          <View style={contactContainer}>
            <Text style={contactText}>De lunes a jueves de 9:30 a 18:30 y viernes de 9:30 a 18:00</Text>
            <Image source={require('../../assets/icons/phone.png')} />
            <Text style={contactText}>+34 682 00 11 22</Text>
            <Image source={require('../../assets/icons/email.png')} />
            <Text style={contactText}>hola@adios.com</Text>
          </View>
        </TouchableOpacity>

      </Modal>
      {/* =====================================Crea tu cuenta Modal==================== */}

      {/* <Modal
        animationType="fade"
        transparent={false}
        visible={contactModal}
      >
        <TouchableOpacity onPress={() => {
          setContactModal(false);
        }}
        >
          <View style={backToheader} />
        </TouchableOpacity>

        <View style={contactContainer}>
          <Text>Contact modal</Text>
        </View>

        <TouchableOpacity onPress={() => {
          setContactModal(false);
        }}
        >
          <View style={backToheader} />
        </TouchableOpacity>
      </Modal> */}

    </View>
  );
}

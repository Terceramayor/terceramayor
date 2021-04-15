// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import {
  View, Image, Text, TouchableOpacity, Modal, TextInput
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
    contactContainer,
    backToheader,
    newAccountContainer,
    newAccountTitle,
    labelInputBlock,
    newAccountInputField,
    newAccountInputFieldText
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
        <TouchableOpacity onPress={() => {
          setcreateAccount(true);
        }}
        >

          <Text style={headerMenuItem}>Crea tu cuenta</Text>
        </TouchableOpacity>
      </View>

      {/* =====================================Contacto Modal==================== */}

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
      {/* =====================================End of Contacto Modal==================== */}
      {/* =====================================Crea tu cuenta Modal==================== */}

      <Modal
        animationType="fade"
        transparent
        visible={createAccount}
      >
        <TouchableOpacity
          style={backToheader}
          onPress={() => {
            setcreateAccount(false);
          }}
        />

        <View style={newAccountContainer}>
          <Text style={newAccountTitle}>Crea tu cuenta</Text>

          <View style={labelInputBlock}>
            <Text style={newAccountInputFieldText}>nombre*</Text>
            <TextInput style={newAccountInputField} />
          </View>
          <View style={labelInputBlock}>
            <Text style={newAccountInputFieldText}>Apellidos*</Text>
            <TextInput style={newAccountInputField} />
          </View>
          <View style={labelInputBlock}>
            <Text style={newAccountInputFieldText}>Correo electrónico*</Text>
            <TextInput style={newAccountInputField} />
          </View>
          <View style={labelInputBlock}>
            <Text style={newAccountInputFieldText}>Contraseña*</Text>
            <TextInput style={newAccountInputField} />
          </View>
        </View>

        <TouchableOpacity
          style={backToheader}
          onPress={() => {
            setcreateAccount(false);
          }}
        />
      </Modal>
      {/* =====================================End of Crea tu cuenta Modal==================== */}
    </View>
  );
}

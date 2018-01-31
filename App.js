import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import ListThumbnailExample from './components/List';
import Login from './components/Login';
import Name from './components/Name';
import Camera from './components/Camera';
import List from './components/List';
import Listvote from './components/Listvote'

export default TabNavigator({
  Login: { screen: Login },

  Name: { screen: Name },
  Camera: { screen: Camera }, 
  Liste: { screen: List },
  Listvote: {screen: Listvote}
});


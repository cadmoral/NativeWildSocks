import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import Login from './components/Login';

import Camera from './components/Camera'; 
import TabTwo from './components/TabTwo';
import List from './components/List';

export default TabNavigator({
  Login: { screen: Login },
  Camera: { screen: Camera }, 
  Liste: { screen: List },
});
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import FixedLabel from './app/components/FixedLabel';

import Camera from './app/components/Camera'; 
import TabTwo from './app/components/TabTwo';

export default TabNavigator({
   Camera: { screen: Camera }, TabTwo: { screen: TabTwo },
});


export default class App extends React.Component {


  render() {
    return (
      
        <FixedLabel />
    
    );
  }
}



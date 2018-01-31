import React, { Component } from 'react';
import { Container, Body, Title, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header>
        <Body>
            <Title center>S'enregistrer</Title>
          </Body>
        </Header>  
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Content>
            <Button full success><Text> Login </Text></Button>
            </Content>
          </Form>
        </Content>
      </Container>
    );
  }
}
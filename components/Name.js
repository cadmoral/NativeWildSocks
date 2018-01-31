import React, { Component } from 'react';
import { Container, Body, Title, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class Name extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title center>Identification</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>First name</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel last>
                            <Label>Last name</Label>
                            <Input />
                        </Item>
                        <Content>
                            <Button full success><Text> Enter </Text></Button>
                        </Content>
                    </Form>
                </Content>
            </Container>
        );
    }
}
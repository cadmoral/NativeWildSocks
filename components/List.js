import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import axios from 'axios';


export default class ListThumbnailExample extends Component {

componentDidMount() {
    // Make a request for a user with a given ID
    axios.get('API URL')
        .then(response => { 
            this.setState({
                items: response.data
            });
            console.log(response);
        })
        .catch(function (error) { 
            console.log(error);
        });
}

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

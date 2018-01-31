import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, SwipeRow, View, Icon, Button  } from 'native-base';
import axios from 'axios';


export default class ListThumbnailExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: []
    };
}

componentDidMount() {
    // Make a request for a user with a given ID
    axios.get('http://0e3e6626.ngrok.io/appmobile/web/users')


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
<Content scrollEnabled={false}>
{this.state.items.map(item =>
  <SwipeRow key={item.id}
    rightOpenValue={-75}
    body={
      <View>
         <Thumbnail square size={80} large source={{ uri:item.picture }} />
         <Text first_name={item.first_name} surname={item.last_name}>{item.first_name} {item.last_name}</Text>
      </View>
    }
    right={
      <Button success onPress={() => alert('Voter')}>
        <Icon active name="add" />
      </Button>
    }
/> )}
</Content>
</Container>
);
  }
}

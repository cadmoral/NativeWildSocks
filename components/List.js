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

handleOnPress(){
 alert('Voter')
 axios.post('http://0e3e6626.ngrok.io/appmobile/web/users', {
   vote: true
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
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
         <Header/> Wild Photos
<Content scrollEnabled={true}>
{this.state.items.map(item =>
  <SwipeRow key={item.id}
    rightOpenValue={-75}
    body={
      <View>
       
         <Thumbnail square size={100} large source={{ uri:item.picture }} />
         <Body>
         <Text first_name={item.first_name} surname={item.last_name}>{item.first_name} {item.last_name}</Text>
        </Body>
         
      </View>
    }
    right={
      <Button success onPress={this.handleOnPress.bind(this)}>
        <Icon active name="add" />
      </Button>
    }
/> )}
</Content>
</Container>
);
  }
}

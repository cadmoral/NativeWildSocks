import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';


export default class Listvote extends Component {
  constructor(props) {
    super(props);
    this.state = {
        votes: []
    };
}

componentDidMount() {
  axios.get('http://0e3e6626.ngrok.io/appmobile/web/users')


      .then(response => { 
          this.setState({
              votes: response.data
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
        <Header/>Vote Scores
        <Content>
        {this.state.votes.map(vote => 
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: vote.picture }} />
              <Body>
                <Text first_name={vote.first_name} last_name={vote.last_name}>{vote.first_name} {vote.last_name}</Text>
              </Body>
              <Right score={vote.score}/>
              {vote.score}
            </ListItem>
        </List>)}
        </Content>
      </Container>
    );
  }
}

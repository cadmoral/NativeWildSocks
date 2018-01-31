import axios from 'axios';

export const SEND_MAIL = "SEND_MAIL";
export const SEND_NAME = "SEND_NAME";

export const ACCEPT_PHOTO = "ACCEPT_PHOTO";
export const SEND_PHOTO = "SEND_PHOTO";


export const GET_LIST = 'GET_LIST';
export const SEND_VOTE = 'SEND_VOTE';
export const GET_ALL_VOTES = 'GET_ALL_VOTES';


// const API_URL = "https://jsonplaceholder.typicode.com/posts"
const API_URL = "https://jsonplaceholder.typicode.com/users"


function send_mail_success (text){
  return {
      type: 'SEND_MAIL',
      text
  }
}

export function sendMail (text) {
  return dispatch => {
    axios.post(API_URL, {mail:text} )
    .then(function(response) {
      console.log(response);
      dispatch (send_mail_success (response.data))
    })
    .catch (function (error){
      console.log(error);
    });
  }
}

function send_name_success (text) {
    return {
        type: 'SEND_NAME',
        text
    }
}

export function sendName (text) {
    return dispatch => {
      axios.post(API_URL, {name:text} )
      .then(function(response) {
        console.log(response);
        dispatch (send_name_success (response.data))
      })
      .catch (function (error){
        console.log(error);
      });
    }
  }

  function send_photo_success (photo){
    return {
        type: 'SEND_PHOTO',
        photo
    }
  }
  
  export function sendPhoto (photo) {
    let data = new FormData();
    data.append('file', file, file.fileName);

    return dispatch => {
      axios.post(API_URL, data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      })
      .then(function(response) {
        console.log(response);
        dispatch (send_photo_success (response.data))
      })
      .catch (function (error){
        console.log(error);
      });
    }
  }

  export function acceptPhoto (text){
    return {
        type: 'ACCEPT_PHOTO',
        text
    }
  }

  function get_list_success (list) {
    return {
        type: 'GET_LIST',
        list
    }
}

export function getList(){
    return dispatch => {
      axios.get(API_URL)
      .then(function (response) {
        console.log(response.data);
        dispatch(get_list_success(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  function send_vote_success (vote) {
    return {
        type: 'SEND_VOTE',
        vote
    }
}

export function sendVote (vote) {
    return dispatch => {
      axios.post(API_URL, {vote:vote} )
      .then(function(response) {
        console.log(response);
        dispatch (send_vote_success (response.data))
      })
      .catch (function (error){
        console.log(error);
      });
    }
  }


  function get_all_votes (votes) {
    return {
        type: 'GET_ALL_VOTES',
        votes
    }
}

export function getList(){
    return dispatch => {
      axios.get(API_URL)
      .then(function (response) {
        console.log(response.data);
        dispatch(get_all_votes(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
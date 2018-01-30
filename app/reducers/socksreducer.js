import {SEND_MAIL, SEND_NAME } from '../actions/actions';

export function mail (state = { mail:[]}, action) {
    switch (action.type){
        case SEND_MAIL:
        return {...state, mail: state.mail.concat(action.mail)}

        default :
        return state
    }
}

export function name (state = { name:[]}, action) {
    switch (action.type){
        case SEND_NAME:
        return {...state, name: state.name.concat(action.name)}

        default :
        return state
    }
}


import {SIGNUP} from '../actionsType';
import {LOGIN} from '../actionsType';

const initailState = {}

 export const userReducer = (state = initailState, action ) => {
   console.log(action.type, '{~~~~~~~~~}')

 switch(action.type) {
   case SIGNUP: 
   return { ...state, successMsg: action.payload } 
   case LOGIN:
     return { ...state, successMsg: action.payload }

   default:
     return state;
 }

}
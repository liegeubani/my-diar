import {SIGNUP} from '../actionsType';


const initailState = {}

 export const userReducer = (state = initailState, action ) => {
   console.log(action.type, '{~{{{{{{{{{{{')

 switch(action.type) {
   case SIGNUP: 
   return { ...state, successMsg: action.payload } 
   

   default:
     return state;
 }


}
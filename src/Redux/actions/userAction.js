import axios from 'axios'
import { SIGNUP } from './../actionsType';


//action creator
 export const signupRequest = (userData) => dispatch => {

 return  axios.post('https://your-diary.herokuapp.com/api/v1/auth/signup', userData).then(result => {
   if (result){
   return dispatch({
      type: SIGNUP,
      payload: result.message
    })
  }
  }).catch(error => console.log(error.message))

}



import axios from 'axios'
import { LOGIN } from './../actionsType'

export const loginRequest = (userdata) => (dispatch) => {
    return axios.post('https://your-diary.herokuapp.com/api/v1//auth/signin', userdata).then(result => {
        if (result) {
            return dispatch({
                type: LOGIN,
                payload: result.message
            })
        }
    }).catch(err => console.log(err.message))
} 
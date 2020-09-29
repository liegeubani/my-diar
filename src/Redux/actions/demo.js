import { DEMO} from '../actionsType';


const demoAction = {
  type: DEMO,
  payload: ['a','b']
}



const demo = () =>  (dispatch) => {
  dispatch(demoAction)
};


export  {demo};

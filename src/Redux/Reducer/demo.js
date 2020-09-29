import {DEMO} from '../actionsType';

const initialState = {
  loading: false
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEMO:
      return { ...state, demo: action.payload };
    default:
      return state;
  }
};



export {demoReducer}

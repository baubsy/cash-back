import {combineReducers} from 'redux';

const paymentReducer = payment => {
  console.log('redux debug')
}

const startReducer = action => {
  if (action.type === 'START'){
    return action.payload;
  }

}
export default combineReducers({

});

import { createStore, combineReducers } from 'redux';
// import parametres from './reducers/paramReducer';

const reducerList = combineReducers({
  // parametres,
});

export default createStore(reducerList);

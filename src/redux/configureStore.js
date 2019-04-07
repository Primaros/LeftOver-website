import { createStore, combineReducers } from 'redux';
import ingredients from './reducers/ingredientsReducer';

const reducerList = combineReducers({
  ingredients,
});

export default createStore(reducerList);

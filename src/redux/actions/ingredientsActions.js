import Store from '../configureStore';

const addIngredients = (item) => {
  const action = { type: 'INGREDIENTS_ADD', value: item };
  Store.dispatch(action);
};

const removeIngredients = (index) => {
  const action = { type: 'INGREDIENTS_REMOVE', value: index };
  Store.dispatch(action);
};

export { addIngredients, removeIngredients };


const initialStateIngredients = { list: [] };

function ingredients(state = initialStateIngredients, action) {
  const nextState = {
    ...state,
  };
  const nextList = nextState.list.splice(0);
  switch (action.type) {
    case 'INGREDIENTS_ADD':
      nextList.push(action.value);
      nextState.list = nextList;
      break;
    case 'INGREDIENTS_REMOVE':
      nextList.splice(action.value, 1);
      nextState.list = nextList;
      break;
    default:
      return state;
  }
  return nextState;
}

export default ingredients;

export default (state = {}, action) => {
  const { name, brewery, description, abv, price, quantity, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brewery: brewery,
          description: description,
          abv: abv,
          price: price,
          quantity: quantity,
          id: id
        }
      });
    case 'DELETE_KEG':
      const newState = {...state};
      delete newState[id];
      return newState;
    case 'BUY_PINT':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brewery: brewery,
          description: description,
          abv: abv,
          price: price,
          quantity: quantity -1,
          id: id
        }
      });
    case 'REPLACE_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brewery: brewery,
          description: description,
          abv: abv,
          price: price,
          quantity: 124,
          id: id
        }
      });
    default:
      return state;
  }
};
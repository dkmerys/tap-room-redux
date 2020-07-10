import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brewery, description, abv, price, quantity, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
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
    case c.DELETE_KEG:
      const newState = {...state};
      delete newState[id];
      return newState;
    case c.BUY_PINT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brewery: brewery,
          description: description,
          abv: abv,
          price: price,
          quantity: quantity - 1,
          id: id
        }
      });
    case c.REPLACE_KEG:
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
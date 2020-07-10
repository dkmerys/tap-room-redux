import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brewery, description, abv, price, quantity, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brewery: brewery,
    description: description,
    abv: abv,
    price: price,
    quantity: quantity,
    id: id
  }
}
export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const buyPint = (beerToBuy) => {
  const { name, brewery, description, abv, price, quantity, id } = beerToBuy;
  return {
    type: c.BUY_PINT,
    name: name,
    brewery: brewery,
    description: description,
    abv: abv,
    price: price,
    quantity: quantity,
    id: id
  }
}

export const replaceKeg = (kegToReplace) => {
  const { name, brewery, description, abv, price, quantity, id } = kegToReplace;
  return {
    type: c.REPLACE_KEG,
    name: name,
    brewery: brewery,
    description: description,
    abv: abv,
    price: price,
    quantity: 124,
    id: id
  }
}

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
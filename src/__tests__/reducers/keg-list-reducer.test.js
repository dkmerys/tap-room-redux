import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  const currentState = {
    1: {name: 'Hayduke Helles',
    brewery: 'Crux',
    description: "Great beer!",
    abv: '5.5%',
    price: '4',
    quantity: 118,
    id: '1'},
    2: {name: '3-Way IPA',
    brewery: 'Ft. George',
    description: "Tastes like a grapefruit.",
    abv: '7.6%',
    price: '6',
    quantity: 65,
    id: '2'}
  }
  let action;
  const kegData = {
    name: 'Hayduke Helles',
    brewery: 'Crux',
    description: "Great beer!",
    abv: '5.5%',
    price: '4',
    quantity: 118,
    id: '0'
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add a new keg to kegList', () => {
    const { name, brewery, description, abv, price, quantity, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brewery: brewery,
      description: description,
      abv: abv,
      price: price,
      quantity: quantity,
      id: id
    }
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brewery: brewery,
        description: description,
        abv: abv,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });
  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: '3-Way IPA',
      brewery: 'Ft. George',
      description: "Tastes like a grapefruit.",
      abv: '7.6%',
      price: '6',
      quantity: 65,
      id: '2'}
    });
  });
  test('Should successfully decrement the quantity property of a keg by 1', () => {
    const { id, name, brewery, description, abv, price, quantity } = kegData;
    action = {
      type: 'BUY_PINT',
      name: name,
      brewery: brewery,
      description: description,
      abv: abv,
      price: price,
      quantity: quantity,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brewery: brewery,
        description: description,
        abv: abv,
        price: price,
        quantity: 117,
        id: id
      }
    })
  })
});
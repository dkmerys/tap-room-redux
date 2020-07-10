import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

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
});
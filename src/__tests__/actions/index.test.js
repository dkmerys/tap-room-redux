import * as actions from './../../actions';
import initialState from '../../components/InitialState';
import * as c from './../../actions/ActionTypes';

describe('taproom actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      name: 'Hayduke Helles',
      brewery: 'Crux',
      description: 'Nice and crisp!',
      abv: '5.5%',
      price: '4',
      quantity: 118,
      id: 1
    })).toEqual({
      type: c.ADD_KEG,
      name: 'Hayduke Helles',
      brewery: 'Crux',
      description: 'Nice and crisp!',
      abv: '5.5%',
      price: '4',
      quantity: 118,
      id: 1
    })
  })
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id:1
    });
  });
  it('buyPint should create BUY_PINT action', () => {
    expect(actions.buyPint({
      name: 'Hayduke Helles',
      brewery: 'Crux',
      description: 'Nice and crisp!',
      abv: '5.5%',
      price: '4',
      quantity: 5,
      id: 1
    })).toEqual({
      type: c.BUY_PINT,
      name: 'Hayduke Helles',
      brewery: 'Crux',
      description: 'Nice and crisp!',
      abv: '5.5%',
      price: '4',
      quantity: 5,
      id: 1
    })
  })
  it('replaceKeg should create REPLACE_KEG action', () => {
    expect(actions.replaceKeg({
      name: 'Hayduke Helles',
      brewery: 'Crux',
      description: 'Nice and crisp!',
      abv: '5.5%',
      price: '4',
      quantity: 118,
      id: 1
    })).toEqual({
      type: c.REPLACE_KEG,
      name: 'Hayduke Helles',
      brewery: 'Crux',
      description: 'Nice and crisp!',
      abv: '5.5%',
      price: '4',
      quantity: 124,
      id: 1
    })
  })
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
});

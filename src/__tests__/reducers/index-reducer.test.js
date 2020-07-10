import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      kegList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().kegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_KEG',
      name: 'Hayduke Helles',
      brewery: 'Crux',
      description: "Great beer!",
      abv: '5.5%',
      price: '4',
      quantity: 118,
      id: '1'
    }
    store.dispatch(action);
    expect(store.getState().kegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});
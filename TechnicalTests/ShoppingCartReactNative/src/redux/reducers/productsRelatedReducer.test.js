import productsRelatedReducer from './productsRelatedReducer.ts';
import { actions } from '../../utils/noMagicStrings';

const actionToBeRejected = {
  type: 'rejectedAction'
};

describe('Given the productsRelatedReducer function ', () => {
  describe('When it is invoked with an action that should not trigger any reducer switch or initialized', () => {
    test('Then the response should be an empty object', () => {
      const response = productsRelatedReducer(undefined, actionToBeRejected);

      expect(response).toStrictEqual({});
    });
  });

  describe('When it is invoked with the action loadShoppingcart ', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actions.loadShoppingcart,
        data: 'fakeData'
      };
      const response = productsRelatedReducer({}, action);

      expect(response).toStrictEqual(action.data);
    });
  });

  describe('When it is invoked with the action increaseProduct ', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actions.increaseProduct,
        data: 'fakeData'
      };
      const response = productsRelatedReducer({}, action);

      expect(response).toStrictEqual(action.data);
    });
  });

  describe('When it is invoked with the action decreaseProduct ', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actions.decreaseProduct,
        data: 'fakeData'
      };
      const response = productsRelatedReducer({}, action);

      expect(response).toStrictEqual(action.data);
    });
  });
});

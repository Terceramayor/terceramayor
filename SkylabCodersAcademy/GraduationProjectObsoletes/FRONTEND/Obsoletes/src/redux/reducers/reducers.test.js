
import deathReasonValidatorReducer from './deathReasonValidatorReducer.ts';
import obsoletesProductsObjectReducer from './obsoletesProductsObjectReducer';
import obsoletesProductStatsReducer from './obsoletesProductStatsReducer';
import obsoletesUserLogInReducer from './obsoletesUserLogInReducer';
import obsoletesUserRegisterReducer from './obsoletesUserRegisterReducer';
import actionsObsoletesUserProfileReducer from './actionsObsoletesUserProfileReducer';
import actionTypes from '../actions/actionTypes';

const actionToBeRejected = {
  type: 'rejectedAction'
};

describe('Given the deathReasonValidatorReducer function ', () => {
  describe('When it is invoked with an action that should not trigger any reducer switch or initialized', () => {
    test('Then the response should be 0', () => {
      const response = deathReasonValidatorReducer(undefined, actionToBeRejected);

      expect(response).toStrictEqual(0);
    });
  });

  describe('When it is invoked with the action actionTypes.VALIDATE_DEATH_REASON', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.VALIDATE_DEATH_REASON,
        data: 'fakeData'
      };
      const response = deathReasonValidatorReducer(0, action);

      expect(response).toStrictEqual(action.data);
    });
  });
});

// ===========================================================================================

describe('Given the obsoletesProductsObjectReducer function ', () => {
  describe('When it is invoked with an action that should not trigger any reducer switch or initialized', () => {
    test('Then the response should be an empty object', () => {
      const response = obsoletesProductsObjectReducer(undefined, actionToBeRejected);

      expect(response).toStrictEqual({});
    });
  });

  describe('When it is invoked with the action actionTypes.LOAD_DASHBOARD', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.LOAD_DASHBOARD,
        data: 'fakeData'
      };
      const response = obsoletesProductsObjectReducer({}, action);

      expect(response).toStrictEqual(action.data);
    });
  });

  describe('When it is invoked with the action actionTypes.SEARCH_PRODUCT', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.SEARCH_PRODUCT,
        data: 'fakeData'
      };
      const response = obsoletesProductsObjectReducer({}, action);

      expect(response).toStrictEqual(action.data);
    });
  });
});

// ===========================================================================================

describe('Given the obsoletesProductStatsReducer function ', () => {
  describe('When it is invoked with an action that should not trigger any reducer switch or initialized', () => {
    test('Then the response should be an empty object', () => {
      const response = obsoletesProductStatsReducer(undefined, actionToBeRejected);

      expect(response).toStrictEqual({});
    });
  });

  describe('When it is invoked with the action actionTypes.LOAD_PRODUCT_STATS', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.LOAD_PRODUCT_STATS,
        data: 'fakeData'
      };
      const response = obsoletesProductStatsReducer({}, action);

      expect(response).toStrictEqual(action.data);
    });
  });

  describe('When it is invoked with the action actionTypes.FEEDBACK_NEW', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.FEEDBACK_NEW,
        data: 'fakeData'
      };
      const response = obsoletesProductStatsReducer({}, action);

      expect(response).toStrictEqual(action.data);
    });
  });

  describe('When it is invoked with the action actionTypes.FEEDBACK_BROKEN', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.FEEDBACK_BROKEN,
        data: 'fakeData'
      };
      const response = obsoletesProductStatsReducer({}, action);

      expect(response).toStrictEqual(action.data);
    });
  });
});

// ===========================================================================================

describe('Given the obsoletesUserLogInReducer function ', () => {
  describe('When it is invoked with an action that should not trigger any reducer switch or initialized', () => {
    test('Then the response should be the initialization object { logInSuccess: false }', () => {
      const response = obsoletesUserLogInReducer(undefined, actionToBeRejected);

      expect(response).toStrictEqual({ logInSuccess: false });
    });
  });
  describe('When it is invoked with the action actionTypes.LOG_IN', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.LOG_IN,
        data: 'fakeData'
      };
      const response = obsoletesUserLogInReducer({ logInSuccess: false }, action);

      expect(response).toStrictEqual(action.data);
    });
  });

  describe('When it is invoked with the action actionTypes.LOG_OUT', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.LOG_OUT,
        data: 'fakeData'
      };
      const response = obsoletesUserLogInReducer({ logInSuccess: false }, action);

      expect(response).toStrictEqual(action.data);
    });
  });
});

// ===========================================================================================

describe('Given the obsoletesUserRegisterReducer function ', () => {
  describe('When it is invoked with an action that should not trigger any reducer switch or initialized', () => {
    test('Then the response should be the initialization object { result: false }', () => {
      const response = obsoletesUserRegisterReducer(undefined, actionToBeRejected);

      expect(response).toStrictEqual({ result: false });
    });
  });

  describe('When it is invoked with the action actionTypes.REGISTER', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.REGISTER,
        data: 'fakeData'
      };
      const response = obsoletesUserRegisterReducer({ result: false }, action);

      expect(response).toStrictEqual(action.data);
    });
  });

  describe('When it is invoked with the action actionTypes.LOG_OUT', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.LOG_OUT,
        data: 'fakeData'
      };
      const response = obsoletesUserRegisterReducer({ result: false }, action);

      expect(response).toStrictEqual(action.data);
    });
  });
});

// ===========================================================================================

describe('Given the actionsObsoletesUserProfileReducer function ', () => {
  describe('When it is invoked with an action that should not trigger any reducer switch or initialized', () => {
    test('Then the response should be an empty object', () => {
      const response = actionsObsoletesUserProfileReducer(undefined, actionToBeRejected);

      expect(response).toStrictEqual({});
    });
  });

  describe('When it is invoked with the action actionTypes.VALIDATE_DEATH_REASON', () => {
    test('Then the response should be action.data', () => {
      const action = {
        type: actionTypes.LOAD_USER_PROFILE,
        data: 'fakeData'
      };
      const response = actionsObsoletesUserProfileReducer({}, action);

      expect(response).toStrictEqual(action.data);
    });
  });
});

// ===========================================================================================

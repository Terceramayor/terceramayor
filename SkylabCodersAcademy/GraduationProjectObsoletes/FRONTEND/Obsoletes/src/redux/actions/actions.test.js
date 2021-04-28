import { loadDashboard, searchProduct } from './actionsObsoletesProductsObject';
import { validateDeathReason, feedbackNew, feedbackBroken, loadProduct } from './actionsObsoletesProductStats';
import actionTypes from './actionTypes';
import { logIn, logOut, register } from './actionsObsoletesUser';
import loadCase from '../../utils/loadCase';
import configureStore from '../store/configureStore';
import petitionsRoutes from './petitionsRoutes';
import { searchPetitionsAxiosConfig } from './../../utils/searchPetitionsAxiosConfig';
import { removeRepeatedEntries } from './../../utils/removeRepeatedEntries';
import { checkIfInObsoletesDb } from './../../utils/checkIfInObsoletesDb';

import { loadUserProfile } from './actionsObsoletesUserProfile';

import axios from 'axios';

jest.mock('axios');
jest.mock('./../../utils/searchPetitionsAxiosConfig');
jest.mock('./../../utils/removeRepeatedEntries');
jest.mock('./../../utils/checkIfInObsoletesDb');

const mockProduct = {
  _id: '6047b4d99183cd62d8dd45b5',
  originId: '30493083045',
  productName: 'SumSag xPro ssd',
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  brand: 'SumSag',
  category: 'smartPhone',
  place: 'megaCo',
  obsoletion: 9.83,
  stats: [
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2020-06-04T00:00:00.000Z',
      broken: true,
      brokenDate: '2021-02-06T00:00:00.000Z',
      user: 'Juan',
      reason: 'Slow System'
    },
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2020-06-04T00:00:00.000Z',
      broken: true,
      brokenDate: '2021-02-06T00:00:00.000Z',
      user: 'Pablo',
      reason: 'Slow System'
    }
  ],
  __v: 0,
  updatedDate: '2021-02-06T00:00:00.000Z'
};

const mockProductObsoletes = {
  _id: '6047b4d99183cd62d8dd45b5',
  originId: '30493083045',
  productName: 'SumSag xPro ssd',
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  brand: 'SumSag',
  category: 'smartPhone',
  place: 'obsoletes',
  obsoletion: 9.83,
  stats: [
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2020-06-04T00:00:00.000Z',
      broken: true,
      brokenDate: '2021-02-06T00:00:00.000Z',
      user: 'Juan',
      reason: 'Slow System'
    },
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2020-06-04T00:00:00.000Z',
      broken: true,
      brokenDate: '2021-02-06T00:00:00.000Z',
      user: 'Pablo',
      reason: 'Slow System'
    }
  ],
  __v: 0,
  updatedDate: '2021-02-06T00:00:00.000Z'
};

describe('Given the actions defined in actionsObsoletesProductsObject ', () => {
  let fakeStore;
  beforeEach(() => {
    fakeStore = configureStore({});
  });

  describe('Given the loadDashboard function ', () => {
    describe('When it is invoked with top rated products as arguments', () => {
      test('Then the axios method get should have been called with the correct petition route', async () => {
        const mockedProductData = { data: [mockProduct, mockProduct] };
        fakeStore.dispatch = jest.fn();
        axios.get = jest.fn().mockImplementationOnce(() => mockedProductData);

        const loadDashboardReturnFn = loadDashboard(loadCase.TOP_RATED);
        await loadDashboardReturnFn(fakeStore.dispatch);

        expect(axios.get).toHaveBeenCalledWith(petitionsRoutes.OBSOLETES_RATED_PRODUCTS_SKYLAB);
      });

      test('Then the dispatcher should have been called', async () => {
        const mockedProductData = { data: [mockProduct, mockProduct] };
        fakeStore.dispatch = jest.fn();
        axios.get = jest.fn().mockImplementationOnce(() => mockedProductData);

        const loadDashboardReturnFn = loadDashboard(loadCase.TOP_RATED);
        await loadDashboardReturnFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });

    describe('When it is invoked with last updated products as arguments', () => {
      test('Then the axios method get should have been called with the correct petition route', async () => {
        const mockedProductData = { data: [mockProduct, mockProduct] };
        fakeStore.dispatch = jest.fn();
        axios.get = jest.fn().mockImplementationOnce(() => mockedProductData);

        const loadDashboardReturnFn = loadDashboard(loadCase.LAST_UPDATED);
        await loadDashboardReturnFn(fakeStore.dispatch);

        expect(axios.get).toHaveBeenCalledWith(petitionsRoutes.OBSOLETES_RATED_PRODUCTS_SKYLAB);
      });
      test('Then the dispatcher should have been called', async () => {
        const mockedProductData = { data: [mockProduct, mockProduct] };
        fakeStore.dispatch = jest.fn();
        axios.get = jest.fn().mockImplementationOnce(() => mockedProductData);

        const loadDashboardReturnFn = loadDashboard(loadCase.LAST_UPDATED);
        await loadDashboardReturnFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });

    describe('When it is invoked with USER_PROFILE and an user profile that already rated at least on product name as arguments', () => {
      test('Then the axios method get should have been called with the correct petition route', async () => {
        const mockedProductData = { data: [mockProduct, mockProduct] };
        fakeStore.dispatch = jest.fn();
        axios.get = jest.fn().mockImplementationOnce(() => mockedProductData);

        const loadDashboardReturnFn = loadDashboard(loadCase.LAST_UPDATED);
        await loadDashboardReturnFn(fakeStore.dispatch);

        expect(axios.get).toHaveBeenCalledWith(petitionsRoutes.OBSOLETES_RATED_PRODUCTS_SKYLAB);
      });
      test('Then the dispatcher should have been called', async () => {
        const mockedProductData = { data: [mockProduct, mockProduct] };
        fakeStore.dispatch = jest.fn();
        axios.get = jest.fn().mockImplementationOnce(() => mockedProductData);

        const loadDashboardReturnFn = loadDashboard(loadCase.USER_PROFILE, 'Pablo');
        await loadDashboardReturnFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });
  });

  describe('Given the searchProduct function ', () => {
    describe('When it is invoked with a string query and the axios promise is successfully resolved', () => {
      test('Then the axios method get should have been called with the correct petition route', async () => {
        const mockedProductData = { data: [mockProduct, mockProduct] };
        fakeStore.dispatch = jest.fn();
        const mockedArray = ['fakeProduct1', 'fakeProduct2', 'fakeProduct3'];
        axios.post = jest.fn().mockImplementation(() => mockedProductData);
        axios.get = jest.fn().mockImplementationOnce(() => mockedProductData);

        searchPetitionsAxiosConfig.mockImplementationOnce(() => mockedArray);
        removeRepeatedEntries.mockImplementationOnce(() => mockedArray);
        checkIfInObsoletesDb.mockImplementationOnce(() => mockedArray);

        const mockedQueryString = 'Mocked query string';

        const loadDashboardReturnFn = searchProduct(mockedQueryString);
        await loadDashboardReturnFn(fakeStore.dispatch);

        expect(axios.get).toHaveBeenCalledWith(petitionsRoutes.OBSOLETES_RATED_PRODUCTS_SKYLAB);
      });
      describe('When it is invoked with a string query and the axios promise is NOT successfully resolved', () => {
        test('Then the dispatcher should have been called', async () => {
          const mockedProductData = { data: [mockProduct, mockProduct] };
          fakeStore.dispatch = jest.fn();
          const mockedArray = ['fakeProduct1', 'fakeProduct2', 'fakeProduct3'];
          axios.post = jest.fn().mockImplementation(() => mockedProductData);
          axios.get = jest.fn().mockImplementationOnce(() => { throw new Error(); });

          searchPetitionsAxiosConfig.mockImplementationOnce(() => mockedArray);
          removeRepeatedEntries.mockImplementationOnce(() => mockedArray);
          checkIfInObsoletesDb.mockImplementationOnce(() => mockedArray);

          const loadDashboardReturnFn = searchProduct(loadCase.TOP_RATED);
          await loadDashboardReturnFn(fakeStore.dispatch);

          expect(fakeStore.dispatch).toHaveBeenCalled();
        });
      });
    });
  });
});

// =========================================================================================

describe('Given the actions defined in actionsObsoletesProductStats ', () => {
  let fakeStore;
  beforeEach(() => {
    fakeStore = configureStore({});
  });

  describe('Given the feedbackNew function ', () => {
    describe('When it is invoked with a user name and a product never rated before ', () => {
      test('Then the axios method put should have been called with the correct petition route', async () => {
        const mockedProductData = { data: 'FakedData' };
        fakeStore.dispatch = jest.fn();

        axios.post = jest.fn().mockImplementationOnce(() => mockedProductData);

        const feedbackNewReturnFn = feedbackNew(mockProduct, 'Manolo');

        await feedbackNewReturnFn(fakeStore.dispatch);
        const firstArgument = axios.post.mock.calls[0][0];
        expect(firstArgument).toBe(petitionsRoutes.OBSOLETES_RATED_PRODUCTS_SKYLAB);
      });
    });

    describe('When it is invoked with a user name and a product never', () => {
      test('Then the dispatcher should have been called', async () => {
        const mockedProductData = { data: 'FakedData' };
        fakeStore.dispatch = jest.fn();

        axios.post = jest.fn().mockImplementationOnce(() => mockedProductData);

        const feedbackNewReturnFn = feedbackNew(mockProduct, 'Manolo');

        await feedbackNewReturnFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });

    describe('When it is invoked with a user name and a product never rated before by such user but already at obsoletes DB', () => {
      test('Then the dispatcher should have been called', async () => {
        const mockedProductData = { data: 'FakedData' };
        fakeStore.dispatch = jest.fn();

        axios.put = jest.fn().mockImplementationOnce(() => mockedProductData);

        const feedbackNewReturnFn = feedbackNew(mockProductObsoletes, 'Manolo');

        await feedbackNewReturnFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });
  });

  describe('Given the feedbackBroken function ', () => {
    describe('When it is invoked with a user name and a product already rated by the user as bought', () => {
      test('Then the axios method put should have been called with the correct petition route', async () => {
        const mockedProductData = { data: mockProduct };
        fakeStore.dispatch = jest.fn();
        axios.put = jest.fn().mockImplementationOnce(() => mockedProductData);

        const feedbackBrokenReturnFn = feedbackBroken(mockProduct, 'Pablo', 'battery dead');
        await feedbackBrokenReturnFn(fakeStore.dispatch);

        const firstArgument = axios.put.mock.calls[0][0];
        expect(firstArgument).toBe(petitionsRoutes.SEND_FEEDBACK_SKYLAB);
      });
    });

    describe('When it is invoked with a user name and a product never rated before by such user', () => {
      test('Then the dispatcher should have been called', async () => {
        const mockedProductData = { data: mockProduct };
        fakeStore.dispatch = jest.fn();
        axios.put = jest.fn().mockImplementationOnce(() => mockedProductData);

        const feedbackBrokenReturnFn = feedbackBroken(mockProduct, 'Pablo', 'battery dead');
        await feedbackBrokenReturnFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });
  });

  describe('Given the validateDeathReason function ', () => {
    describe('When it is invoked with the reset flag as null', () => {
      test('Then the return object data field sohuld be 0', () => {
        const expectedReturn = {
          data: 0,
          type: actionTypes.VALIDATE_DEATH_REASON
        };
        const fnReturn = validateDeathReason(2, -1, true);

        expect(fnReturn).toStrictEqual(expectedReturn);
      });
    });

    describe('When it is invoked with the reset flag not as null and the increment set to 1', () => {
      test('Then the return object data field sohuld be 0', () => {
        const expectedReturn = {
          data: 3,
          type: 'VALIDATE_DEATH_REASON'
        };
        const fnReturn = validateDeathReason(2, 1, false);

        expect(fnReturn).toStrictEqual(expectedReturn);
      });
    });

    describe('When it is invoked with the reset flag not as null and the increment set to -1', () => {
      test('Then the return object data field sohuld be 0', () => {
        const expectedReturn = {
          data: 1,
          type: actionTypes.VALIDATE_DEATH_REASON
        };
        const fnReturn = validateDeathReason(2, -1, false);

        expect(fnReturn).toStrictEqual(expectedReturn);
      });
    });
  });

  describe('Given the loadProduct function ', () => {
    describe('When it is invoked with a valid product with stats', () => {
      test('Then the return object data field sohuld be such product', () => {
        const expectedReturn = {
          data: mockProduct,
          type: actionTypes.LOAD_PRODUCT_STATS
        };
        const fnReturn = loadProduct(mockProduct);

        expect(fnReturn).toStrictEqual(expectedReturn);
      });
    });
  });
});

// =========================================================================================

describe('Given the actions defined in actionsObsoletesUser ', () => {
  let fakeStore;
  beforeEach(() => {
    fakeStore = configureStore({});
  });

  describe('Given the register function ', () => {
    describe('When it is invoked with null', () => {
      test('Then the return action should be  {"data": {"result": false, "status": false}, "type": "REGISTER"}', () => {
        const expectedReturn = {
          data: {
            result: false, status: false
          },
          type: actionTypes.REGISTER
        };
        const fnReturn = register(null);

        expect(fnReturn).toStrictEqual(expectedReturn);
      });
    });

    describe('When it is invoked with valid credentials', () => {
      test('Then the dispatcher should have been called', async () => {
        const mockedUserCredentials = {
          fake: 'fakceCredenteials'
        };
        const mockedAxiosResponse = { data: 'mockedData' };
        axios.post = jest.fn().mockImplementationOnce(() => mockedAxiosResponse);
        fakeStore.dispatch = jest.fn();

        const registerReturnFn = register(mockedUserCredentials);
        await registerReturnFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });
  });

  describe('Given the logIn function ', () => {
    describe('When it is invoked with valid credentials', () => {
      test('Then the dispatcher should have been called', async () => {
        const mockedUserCredentials = {
          fake: 'fakceCredenteials'
        };
        const mockedAxiosResponse = { data: 'mockedData' };
        axios.post = jest.fn().mockImplementationOnce(() => mockedAxiosResponse);
        fakeStore.dispatch = jest.fn();

        const logInFn = logIn(mockedUserCredentials);
        await logInFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });

    describe('When it is invoked and the axios return an error', () => {
      test('Then the dispatcher should have been called', async () => {
        const mockedUserCredentials = {
          fake: 'fakceCredenteials'
        };
        axios.post = jest.fn().mockImplementationOnce(() => { throw new Error(); });
        fakeStore.dispatch = jest.fn();

        const logInFn = logIn(mockedUserCredentials);
        await logInFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });
  });

  describe('Given the logOut function ', () => {
    describe('When it is invoked with the current user credentials', () => {
      test('Then the dispatcher should have been called', async () => {
        const mockedUserCredentials = {
          fake: 'fakceCredenteials'
        };
        axios.post = jest.fn().mockImplementationOnce(() => 'noReturnNeeded');
        fakeStore.dispatch = jest.fn();

        const logInFn = logOut(mockedUserCredentials);
        await logInFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });
  });
});

// =========================================================================================

describe('Given the actions defined in actionsObsoletesUser ', () => {
  let fakeStore;
  beforeEach(() => {
    fakeStore = configureStore({});
  });

  describe('Given the loadUserProfile function ', () => {
    describe('When it is invoked with a user name', () => {
      test('Then the return action should be  an array of length ...', async () => {
        const mockedProductData = { data: [mockProduct, mockProduct] };
        axios.get = jest.fn().mockImplementationOnce(() => mockedProductData);

        fakeStore.dispatch = jest.fn();

        const loadUserProfileFn = loadUserProfile('Pablo');
        await loadUserProfileFn(fakeStore.dispatch);

        expect(fakeStore.dispatch).toHaveBeenCalled();
      });
    });
  });
});

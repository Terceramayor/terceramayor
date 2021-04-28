// eslint-disable-next-line no-use-before-define
import React from 'react';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import loadCase from '../../../utils/loadCase';
import { render, fireEvent, act } from '@testing-library/react-native';
import spyOnPressFunction from './spyOnPressFunction';
import configureStore from 'redux-mock-store';
import * as actionsProductsObject from '../../../redux/actions/actionsObsoletesProductsObject';
import * as actionsObsoletesUser from '../../../redux/actions/actionsObsoletesUser';

import thunk from 'redux-thunk';

jest.mock('./../../../REDUX/actions/actionsObsoletesProductsObject');
jest.mock('./../../../REDUX/actions/actionsObsoletesUser');
jest.mock('../../../utils/loadCase');

jest.mock('./../logInSignIn/LogInSignIn', () => 'MockedComponent');
jest.mock('./spyOnPressFunction');

const mockStore = configureStore([thunk]);

describe('Given the NavBar component', () => {
  beforeEach(() => {
    jest.spyOn(actionsProductsObject, 'loadDashboard').mockReturnValueOnce({ type: '' });
    jest.spyOn(actionsObsoletesUser, 'logOut').mockReturnValueOnce({ type: '' });
    jest.spyOn(actionsProductsObject, 'searchProduct').mockReturnValue({ type: '' });
  });

  describe('When it is rendered as top rated', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.LAST_UPDATED },
        userLogIn: {
          logInStatus: false,
          username: 'Fake_Name'
        }
      });
      const navigation = { navigate: jest.fn() };
      const tree = render(<Provider store={store}><NavBar navigation={navigation}/></Provider>);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('When it is rendered as top rated', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.TOP_RATED },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const navigation = { navigate: jest.fn() };
      const tree = render(<Provider store={store}><NavBar navigation={navigation}/></Provider>);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('When the buttons last updated or top rated are pressed', () => {
    test('Then, the loadDashboard action should be invoked', () => {
      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.TOP_RATED },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const navigation = { navigate: jest.fn() };

      const { getAllByTestId } = render(<Provider store={store}><NavBar navigation = {navigation}/></Provider>);

      const touchableOpacityArray = getAllByTestId('touchableOpacityReduxActionLoadDashboard');

      act(() => {
        touchableOpacityArray.forEach((button) => {
          fireEvent.press(button);
          expect(actionsProductsObject.loadDashboard).toHaveBeenCalled();
        });
      });
    });
  });
  describe('When the buttons FAQ or back are pressed', () => {
    test('Then the spyOnPressFunction function should be invoked', () => {
      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.TOP_RATED },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const navigation = { navigate: jest.fn() };
      const { getAllByTestId } = render(<Provider store={store}><NavBar navigation={navigation}/></Provider>);

      const touchableOpacityArray = getAllByTestId('touchableOpacity');
      act(() => {
        touchableOpacityArray.forEach((button) => {
          fireEvent.press(button);
          expect(spyOnPressFunction).toHaveBeenCalled();
        });
      });
    });
  });

  describe('When the login button is pressed and the user is not logged in', () => {
    test('Then the logOut action should not be invoked', () => {
      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.TOP_RATED },
        userLogIn: {
          logInStatus: false,
          username: 'Fake_Name'
        }
      });

      const navigation = { navigate: jest.fn() };

      const { getByTestId } = render(<Provider store={store}><NavBar navigation = {navigation}/></Provider>);
      act(() => {
        fireEvent.press(getByTestId('touchableOpacityReduxActionLogSignIn'));
        expect(actionsObsoletesUser.logOut).not.toHaveBeenCalled();
      });
    });
  });

  describe('When the login button is pressed and the user is logged in', () => {
    test('Then the logOut action should be invoked', async () => {
      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.TOP_RATED },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const navigation = { navigate: jest.fn() };
      const { getByTestId } = render(<Provider store={store}><NavBar navigation = {navigation}/></Provider>);

      await fireEvent.press(getByTestId('touchableOpacityReduxActionLogSignIn'));

      expect(actionsObsoletesUser.logOut).toHaveBeenCalled();
    });
  });

  describe('When the search button is pressed ', () => {
    test('Then the setSearchProductQuery action should be invoked', async () => {
      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.TOP_RATED },

        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const actions = { searchProduct: jest.fn() };

      const navigation = { navigate: jest.fn() };
      const { getByTestId } = render(<Provider store={store}><NavBar navigation = {navigation} actions = {actions}/></Provider>);

      await fireEvent.press(getByTestId('searchProduct'));

      expect(actionsProductsObject.searchProduct).toHaveBeenCalled();
    });
  });

  describe('When the search button is pressedanything is written in the seach input text box ', () => {
    test('Then the search textbox value should be updated accordingly', () => {
      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.TOP_RATED },

        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const actions = { searchProduct: jest.fn() };

      const navigation = { navigate: jest.fn() };
      const { getByTestId } = render(<Provider store={store}><NavBar navigation = {navigation} actions = {actions}/></Provider>);
      const textInput = getByTestId('searchProductinput');
      const expectedResult = 'mockedText';
      act(() => {
        fireEvent.changeText(textInput, expectedResult);
      });

      expect(textInput.props.value).toBe(expectedResult);
    });
  });

  describe('When the userProfile button is pressed ', () => {
    test('Then the loadDashboard action should be invoked', async () => {
      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.TOP_RATED },

        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const actions = { searchProduct: jest.fn() };

      const navigation = { navigate: jest.fn() };
      const { getByTestId } = render(<Provider store={store}><NavBar navigation = {navigation} actions = {actions}/></Provider>);

      await fireEvent.press(getByTestId('loadUserProfile'));

      expect(actionsProductsObject.loadDashboard).toHaveBeenCalled();
    });
  });
});

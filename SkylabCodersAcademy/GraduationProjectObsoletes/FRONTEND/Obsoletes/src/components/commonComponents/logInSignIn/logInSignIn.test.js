// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import LogInSignIn from './LogInSignIn';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as userActions from '../../../redux/actions/actionsObsoletesUser';
jest.mock('../feedbackModalModel/FeedbackModalModel', () => 'MockedComponent');

jest.mock('./../../../REDUX/actions/actionsObsoletesUser');
jest.useFakeTimers();

const mockStore = configureStore([thunk]);

const mockedProduct = {
  _id: '6047b993a3106f69e02d67c7',
  originId: '30493083045',
  productName: 'MiXiao Lite sl 45',
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  brand: 'SumSag',
  category: 'smartPhone',
  obsoletion: 0.14,
  stats: [
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2017-01-04T00:00:00.000Z',
      broken: false,
      brokenDate: null,
      user: 'Pablo',
      reason: ''
    }
  ],
  __v: 0,
  updatedDate: '2019-12-01T00:00:00.000Z'
};

describe('Given the LogInSignIn component', () => {
  beforeEach(() => {
    jest.spyOn(userActions, 'logIn').mockReturnValue({ type: '' });
    jest.spyOn(userActions, 'register').mockReturnValue({ type: '' });
  });

  describe('When it is renderedthe for the first time', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const store = mockStore({
        userRegister: { result: false, status: false },
        userLogIn: {
          logInStatus: false,
          username: 'Fake_Name'
        }
      });
      const tree = render(<Provider store={store}><LogInSignIn singleProduct={mockedProduct}/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When it is rendered with a valid new user', () => {
    test('Then the register action should have been called', () => {
      const store = mockStore({
        userRegister: { result: true, status: false },
        userLogIn: {
          logInStatus: false,
          username: 'Fake_Name'
        }
      });
      render(<Provider store={store}><LogInSignIn singleProduct={mockedProduct}/></Provider>);
      act(() => {
        jest.runAllTimers();
      });

      expect(userActions.register).toHaveBeenCalled();
    });
  });

  describe('When it is rendered with an already existing user', () => {
    test('Then the register should have been called', () => {
      const store = mockStore({
        userRegister: { result: false, status: true },
        userLogIn: {
          logInStatus: false,
          username: 'Fake_Name'
        }
      });
      render(<Provider store={store}><LogInSignIn singleProduct={mockedProduct}/></Provider>);
      act(() => {
        jest.runAllTimers();
      });

      expect(userActions.register).toHaveBeenCalled();
    });
  });

  describe('When it is render after the user successfully logs in', () => {
    test('Then the register should have been called', () => {
      const store = mockStore({
        userRegister: { result: false, status: true },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const logInSignInControls = jest.fn();
      const hamburgerControls = jest.fn();

      render(<Provider store={store}><LogInSignIn singleProduct={mockedProduct} logInSignInControls={logInSignInControls} hamburgerControls={hamburgerControls}/></Provider>);
      act(() => {
        jest.runAllTimers();
      });

      expect(userActions.register).toHaveBeenCalled();
    });
  });

  describe('When the user presses the register button', () => {
    test('Then the register action should have been called', () => {
      const store = mockStore({
        userRegister: { result: false, status: true },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const logInSignInControls = jest.fn();
      const hamburgerControls = jest.fn();

      const { getByTestId } = render(<Provider store={store}><LogInSignIn singleProduct={mockedProduct} logInSignInControls={logInSignInControls} hamburgerControls={hamburgerControls}/></Provider>);

      act(() => {
        fireEvent.press(getByTestId('logInButton'));
        jest.runAllTimers();
      });

      expect(userActions.register).toHaveBeenCalled();
    });
  });

  describe('When the user presses the login button', () => {
    test('Then the login action should have been called', () => {
      const store = mockStore({
        userRegister: { result: false, status: true },
        userLogIn: {
          logInStatus: false,
          username: 'Fake_Name'
        }
      });
      const logInSignInControls = jest.fn();
      const hamburgerControls = jest.fn();

      const { getByTestId } = render(<Provider store={store}><LogInSignIn singleProduct={mockedProduct} logInSignInControls={logInSignInControls} hamburgerControls={hamburgerControls}/></Provider>);

      act(() => {
        fireEvent.press(getByTestId('logIn'));
        jest.runAllTimers();
      });

      expect(userActions.logIn).toHaveBeenCalled();
    });
  });

  describe('When the user writes in the user textbox', () => {
    test('Then the user textbox value should be updated accordingly', () => {
      const store = mockStore({
        userRegister: { result: false, status: true },
        userLogIn: {
          logInStatus: false,
          username: 'Fake_Name'
        }
      });

      const logInSignInControls = jest.fn();
      const hamburgerControls = jest.fn();

      const { getByTestId } = render(<Provider store={store}><LogInSignIn singleProduct={mockedProduct} logInSignInControls={logInSignInControls} hamburgerControls={hamburgerControls}/></Provider>);
      const textInput = getByTestId('userNameInput');
      const expectedResult = 'mockedText';
      act(() => {
        fireEvent.changeText(textInput, expectedResult);
        jest.runAllTimers();
      });
      expect(textInput.props.value).toBe(expectedResult);
    });
  });

  describe('When the user writes in the password textbox', () => {
    test('Then the password textbox value should be updated accordingly', () => {
      const store = mockStore({
        userRegister: { result: false, status: true },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const logInSignInControls = jest.fn();
      const hamburgerControls = jest.fn();

      const { getByTestId } = render(<Provider store={store}><LogInSignIn singleProduct={mockedProduct} logInSignInControls={logInSignInControls} hamburgerControls={hamburgerControls}/></Provider>);
      const textInput = getByTestId('passwordInput');
      const expectedResult = 'mockedText';
      act(() => {
        fireEvent.changeText(textInput, expectedResult);
        jest.runAllTimers();
      });
      expect(textInput.props.value).toBe(expectedResult);
    });
  });
});

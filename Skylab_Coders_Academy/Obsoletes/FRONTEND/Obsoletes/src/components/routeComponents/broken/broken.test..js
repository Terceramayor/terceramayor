// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Casuistic from './Casuistic';
import * as actionsObsoletesProductStats from '../../../redux/actions/actionsObsoletesProductStats';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import userFeedbackPosible from '../../../utils/userFeedbackPosible';

jest.mock('./../../commonComponents/navBar/NavBar', () => 'MockedComponent');
jest.mock('../../../utils/userFeedbackPosible');

const mockStore = configureStore([thunk]);

describe('Given the Casuistic component', () => {
  beforeEach(() => {
    jest.spyOn(actionsObsoletesProductStats, 'feedbackNew').mockReturnValueOnce({ type: '' });
  });
  describe('When it is rendered with a valid product object, the user has not given feedback yet and he/she presses the "I just bought it" button', () => {
    test('Then the navigation method should be called', () => {
      userFeedbackPosible.mockImplementationOnce(() => { return { userAlreadyFeedback: true, isBroken: false }; });

      const store = mockStore({
        obsoletesProductStats: { place: 'obsoletes' },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const navigation = {
        navigate: jest.fn().mockImplementationOnce(() => { 'NavigateToCasuistic'; })
      };
      const { getByTestId } = render(<Provider store={store}><Casuistic navigation = {navigation}/></Provider>);

      fireEvent.press(getByTestId('submitAlreadyFeedback'));
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When it is rendered with a valid product object and the user has not given feedback yet', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      userFeedbackPosible.mockImplementationOnce(() => { return { userAlreadyFeedback: false, isBroken: false }; });

      const store = mockStore({
        obsoletesProductStats: { },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const tree = render(<Provider store={store}><Casuistic/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When it is rendered with a valid product object and the user has already given feedback yet', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      userFeedbackPosible.mockImplementationOnce(() => { return { userAlreadyFeedback: true, isBroken: false }; });

      const store = mockStore({
        obsoletesProductStats: { },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const tree = render(<Provider store={store}><Casuistic /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When it is rendered with a valid product object, the user has already given feedback and he/she presses the "I just bought it" button', () => {
    test('Then the feedbackNew action should be called', () => {
      userFeedbackPosible.mockImplementation(() => { return { userAlreadyFeedback: false, isBroken: false }; });

      const store = mockStore({
        obsoletesProductStats: { },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const { getByTestId } = render(<Provider store={store}><Casuistic/></Provider>);
      fireEvent.press(getByTestId('submitFeedback'));
      expect(actionsObsoletesProductStats.feedbackNew).toHaveBeenCalled();
    });
  });

  describe('When it is rendered with a valid product object, the user has submitted feeback and he/she presses the modal window', () => {
    test('Then the navigation method should be called', () => {
      userFeedbackPosible.mockImplementationOnce(() => { return { userAlreadyFeedback: true, isBroken: false }; });

      const store = mockStore({
        obsoletesProductStats: { place: 'obsoletes' },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const navigation = {
        navigate: jest.fn().mockImplementationOnce(() => { 'NavigateToStats'; })
      };
      const { getByTestId } = render(<Provider store={store}><Casuistic navigation = {navigation}/></Provider>);

      fireEvent.press(getByTestId('feedbackOk'));
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});

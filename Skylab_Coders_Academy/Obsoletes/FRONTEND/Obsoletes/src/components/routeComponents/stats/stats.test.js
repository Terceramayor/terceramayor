// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Stats from './Stats';
import { calculateOwnersExowners } from '../../../utils/calculateOwnersExowners';
import { formatDate } from '../../../utils/formatDate';
import { scoreToColor } from '../../../utils/scoreToColor';
import { deathStatistics } from '../../../utils/deathStatistics';
import { barDotPossition } from '../../../utils/barDotPossition';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import userFeedbackPosible from '../../../utils/userFeedbackPosible';

jest.mock('./../../commonComponents/navBar/NavBar', () => 'MockedComponent');
jest.mock('../../../utils/userFeedbackPosible');
jest.mock('../../../utils/calculateOwnersExowners');
jest.mock('../../../utils/deathStatistics');
jest.mock('../../../utils/formatDate');
jest.mock('../../../utils/scoreToColor');
jest.mock('../../../utils/barDotPossition');
jest.mock('./../../../REDUX/actions/actionsObsoletesProductStats');
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

const mockedDeathStats = [
  {
    amount: 2,
    averageDuration: '5.50',
    deathReason: 'Battery dead',
    percentageDeathReason: '40.0'
  },
  {
    amount: 1,
    averageDuration: '31.02',
    deathReason: 'Screen broke',
    percentageDeathReason: '20.0'
  },
  {
    amount: 1,
    averageDuration: '0.00',
    deathReason: 'New reason',
    percentageDeathReason: '20.0'
  },
  {
    amount: 1,
    averageDuration: '0.00',
    deathReason: 'New reason 2',
    percentageDeathReason: '20.0'
  }
];

describe('Given the Product component', () => {
  beforeEach(() => {

  });

  describe('When it is rendered with a valid product object and the user has not given feedback yet', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      calculateOwnersExowners.mockImplementationOnce(() => { return { owners: 1, exOwners: 0 }; });
      scoreToColor.mockImplementationOnce(() => { return 100; });
      formatDate.mockImplementationOnce(() => { return '2019-12-1'; });
      deathStatistics.mockImplementationOnce(() => { return mockedDeathStats; });
      userFeedbackPosible.mockImplementationOnce(() => { return { userAlreadyFeedback: false, isBroken: false }; });
      barDotPossition.mockImplementationOnce(() => { return 5; });

      const store = mockStore({
        obsoletesProductStats: { },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const tree = render(<Provider store={store}><Stats singleProduct={mockedProduct}/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When it is rendered with a valid product object and the user has already given feedback but no as broken', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      calculateOwnersExowners.mockImplementationOnce(() => { return { owners: 1, exOwners: 0 }; });
      scoreToColor.mockImplementationOnce(() => { return 100; });
      formatDate.mockImplementationOnce(() => { return '2019-12-1'; });
      deathStatistics.mockImplementationOnce(() => { return mockedDeathStats; });
      userFeedbackPosible.mockImplementationOnce(() => { return { userAlreadyFeedback: true, isBroken: false }; });

      const store = mockStore({
        obsoletesProductStats: { },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const tree = render(<Provider store={store}><Stats singleProduct={mockedProduct}/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When it is rendered with a valid product object and the user has already given feedback as broken', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      calculateOwnersExowners.mockImplementationOnce(() => { return { owners: 1, exOwners: 0 }; });
      scoreToColor.mockImplementationOnce(() => { return 100; });
      formatDate.mockImplementationOnce(() => { return '2019-12-1'; });
      deathStatistics.mockImplementationOnce(() => { return mockedDeathStats; });
      userFeedbackPosible.mockImplementationOnce(() => { return { userAlreadyFeedback: true, isBroken: true }; });

      const store = mockStore({
        obsoletesProductStats: { },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const tree = render(<Provider store={store}><Stats singleProduct={mockedProduct}/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When it is rendered with a valid product object user presses the submit feedback button', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      calculateOwnersExowners.mockImplementationOnce(() => { return { owners: 1, exOwners: 0 }; });
      scoreToColor.mockImplementationOnce(() => { return 100; });
      formatDate.mockImplementationOnce(() => { return '2019-12-1'; });
      deathStatistics.mockImplementationOnce(() => { return mockedDeathStats; });
      userFeedbackPosible.mockImplementationOnce(() => { return { userAlreadyFeedback: false, isBroken: false }; });
      const navigation = {
        navigate: jest.fn().mockImplementationOnce(() => { 'NavigateToCasuistic'; })
      };

      const store = mockStore({
        obsoletesProductStats: { },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const { getByTestId } = render(<Provider store={store}><Stats singleProduct={mockedProduct} navigation = {navigation}/></Provider>);

      fireEvent.press(getByTestId('touchableOpacity'));
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});

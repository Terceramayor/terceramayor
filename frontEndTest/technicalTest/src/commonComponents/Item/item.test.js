// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Product from './Product';
import { calculateOwnersExowners } from '../../../utils/calculateOwnersExowners';
import { formatDate } from '../../../utils/formatDate';
import { scoreToColor } from '../../../utils/scoreToColor';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import loadCase from '../../../utils/loadCase';
import * as productStatsActions from '../../../redux/actions/actionsObsoletesProductStats';

jest.mock('../../../utils/calculateOwnersExowners');
jest.mock('../../../utils/formatDate');
jest.mock('../../../utils/scoreToColor');
jest.mock('./../../../REDUX/actions/actionsObsoletesProductStats');
jest.mock('./../../commonComponents/feedbackModalModel/feedbackModalModel', () => 'MockedComponent');
jest.useFakeTimers();

const mockStore = configureStore([thunk]);

const mockedProductObsoletes = {
  _id: '6047b993a3106f69e02d67c7',
  originId: '30493083045',
  productName: 'MiXiao Lite sl 45',
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  brand: 'SumSag',
  category: 'smartPhone',
  place: 'obsoletes',
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

const mockedProductMegaCo = {
  _id: '6047b993a3106f69e02d67c7',
  originId: '30493083045',
  productName: 'MiXiao Lite sl 45',
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  brand: 'SumSag',
  category: 'smartPhone',
  place: 'megaCo',
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

describe('Given the Product component', () => {
  beforeEach(() => {
    jest.spyOn(productStatsActions, 'loadProduct').mockReturnValueOnce({ type: '' });
  });

  describe('When it is rendered with a valid product object already at Obsoletes DB', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      calculateOwnersExowners.mockImplementationOnce(() => { return { owners: 1, exOwners: 0 }; });
      scoreToColor.mockImplementationOnce(() => { return 100; });
      formatDate.mockImplementationOnce(() => { return '2019-12-1'; });

      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.TOP_RATED },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const tree = render(<Provider store={store}><Product singleProduct={mockedProductObsoletes}/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When it is rendered with a valid product object not yet at Obsoletes DB', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      calculateOwnersExowners.mockImplementationOnce(() => { return { owners: 1, exOwners: 0 }; });
      scoreToColor.mockImplementationOnce(() => { return 100; });
      formatDate.mockImplementationOnce(() => { return '2019-12-1'; });

      const store = mockStore({
        obsoletesProductsObject: { casuistic: loadCase.TOP_RATED },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const tree = render(<Provider store={store}><Product singleProduct={mockedProductMegaCo}/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When the product is pressed and the user is already logged and the product is NOT yet at Obsoletes DB', () => {
    test('Then the action loadProduct should be invoked ', () => {
      calculateOwnersExowners.mockImplementationOnce(() => { return { owners: 1, exOwners: 0 }; });
      scoreToColor.mockImplementationOnce(() => { return 100; });
      formatDate.mockImplementationOnce(() => { return '2019-12-1'; });
      const store = mockStore({
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const navigation = { navigate: jest.fn() };
      const { getByTestId } = render(<Provider store={store}><Product singleProduct={mockedProductMegaCo} navigation = {navigation}/></Provider>);

      act(() => {
        fireEvent.press(getByTestId('touchableOpacityMegaCo'));
        jest.runAllTimers();
      });
      expect(productStatsActions.loadProduct).toHaveBeenCalled();
    });
  });

  describe('When the product is pressed and the user is not yet logged and the product is NOT yet at Obsoletes DB', () => {
    test('Then the action loadProduct should be invoked ', () => {
      calculateOwnersExowners.mockImplementationOnce(() => { return { owners: 1, exOwners: 0 }; });
      scoreToColor.mockImplementationOnce(() => { return 100; });
      formatDate.mockImplementationOnce(() => { return '2019-12-1'; });
      const store = mockStore({
        userLogIn: {
          logInStatus: false,
          username: 'Fake_Name'
        }
      });
      const navigation = { navigate: jest.fn() };
      const { getByTestId } = render(<Provider store={store}><Product singleProduct={mockedProductMegaCo} navigation = {navigation}/></Provider>);

      act(() => {
        fireEvent.press(getByTestId('touchableOpacityMegaCo'));
        jest.runAllTimers();
      });
      expect(productStatsActions.loadProduct).toHaveBeenCalled();
    });
  });

  describe('When the product is pressed and the user is already logged and the product is already at Obsoletes DB', () => {
    test('Then the action loadProduct should be invoked ', () => {
      calculateOwnersExowners.mockImplementationOnce(() => { return { owners: 1, exOwners: 0 }; });
      scoreToColor.mockImplementationOnce(() => { return 100; });
      formatDate.mockImplementationOnce(() => { return '2019-12-1'; });
      const store = mockStore({
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });
      const navigation = { navigate: jest.fn() };
      const { getByTestId } = render(<Provider store={store}><Product singleProduct={mockedProductObsoletes} navigation = {navigation}/></Provider>);

      act(() => {
        fireEvent.press(getByTestId('touchableOpacityObsoletes'));
        jest.runAllTimers();
      });
      expect(productStatsActions.loadProduct).toHaveBeenCalled();
    });
  });

  describe('When the product is pressed and the user is not logged and the product is already at Obsoletes DB', () => {
    test('Then the action loadProduct should be invoked ', () => {
      calculateOwnersExowners.mockImplementation(() => { return { owners: 1, exOwners: 0 }; });
      scoreToColor.mockImplementation(() => { return 100; });
      formatDate.mockImplementation(() => { return '2019-12-1'; });

      const store = mockStore({
        userLogIn: {
          logInStatus: false,
          username: 'Fake_Name'
        }
      });
      const navigation = { navigate: jest.fn() };
      const { getByTestId } = render(<Provider store={store}><Product singleProduct={mockedProductObsoletes} navigation = {navigation}/></Provider>);

      act(() => {
        fireEvent.press(getByTestId('touchableOpacityObsoletes'));
        jest.runAllTimers();
      });

      expect(productStatsActions.loadProduct).toHaveBeenCalled();
    });
  });
});

import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';
import * as actionsObsoletesProductsObject from '../../../redux/actions/actionsObsoletesProductsObject';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('./../../commonComponents/navBar/NavBar', () => 'MockedNavBarComponent');
jest.mock('./../../commonComponents/product/Product', () => 'MockedProductComponent');

const mockStore = configureStore([thunk]);

const mockedProductArray = [{
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
},
{
  _id: '6047b993a3106294e02d67c7',
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
}];

describe('Given the Dashboard component', () => {
  beforeEach(() => {
    jest.spyOn(actionsObsoletesProductsObject, 'loadDashboard').mockReturnValueOnce({ type: '' });
  });

  describe('When it is rendered with a valid product object and the user has not given feedback yet', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const store = mockStore({
        obsoletesProductsObject: { productsArray: mockedProductArray },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const tree = render(<Provider store={store}><Dashboard/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When it is rendered with an empty product array object and the user has not given feedback yet', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const store = mockStore({
        obsoletesProductsObject: { productsArray: [] },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const tree = render(<Provider store={store}><Dashboard/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
});

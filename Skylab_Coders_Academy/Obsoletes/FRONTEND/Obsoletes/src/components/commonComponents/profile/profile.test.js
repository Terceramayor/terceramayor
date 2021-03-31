// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profile from './Profile';

jest.mock('./../../commonComponents/navBar/NavBar', () => 'MockedNavBarComponent');
jest.mock('./../productProfile/ProductProfile', () => 'ProductProfileComponent');

const mockStore = configureStore([thunk]);

const mockedProductArray = [{
  _id: '6047b993a3106f69e02d67c7',
  originId: '30493083045',
  productName: 'MiXiao Lite xl 45',
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

describe('Given the Profile component', () => {
  describe('When it is rendered without any yet rated products with the user not being logged out', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const store = mockStore({
        userprofileProducts: { productsArray: [] },
        userLogIn: {
          logInStatus: false,
          username: 'Fake_Name'
        }

      });
      const navigation = { navigate: jest.fn() };
      const tree = render(<Provider store={store} ><Profile navigation={navigation} userprofileProducts={mockedProductArray}/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
  describe('When it is rendered with an already rated products array for an specific user and the user which is logged in', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const store = mockStore({
        userprofileProducts: { productsArray: mockedProductArray },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const navigation = { navigate: jest.fn() };
      const tree = render(<Provider store={store} ><Profile navigation={navigation}/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
  describe('When it is rendered with an already rated products empty array', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const store = mockStore({
        userprofileProducts: { productsArray: [] },
        userLogIn: {
          logInStatus: true,
          username: 'Fake_Name'
        }
      });

      const navigation = { navigate: jest.fn() };
      const tree = render(<Provider store={store} ><Profile navigation={navigation}/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
});

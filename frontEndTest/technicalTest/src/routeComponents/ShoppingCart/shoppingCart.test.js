// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ShoppingCart from './ShoppingCart';
import * as productActions from '../../redux/actions/productsRelatedActions';

const mockStore = configureStore([thunk]);

const shoppingCartMockedData = {

  data: {
    type: 'cart',
    id: 63174679,
    stores: {
      data: [
        {
          id: 350,
          attributes: {
            name: 'Vinos Baco'
          },
          relationships: {
            items: [
              {
                type: 'items',
                id: 434531,
                attributes: {
                  name: 'Ron Barceló Imperial',
                  current_unit_price: '24.50',
                  quantity: 3,
                  image_url: 'https://media-verticommnetwork1.netdna-ssl.com/wines/ron-barcelo-imperial-434531-s350_d.jpg',
                  brand: 'Ron Barceló'
                }
              },
              {
                id: 1653492,
                attributes: {
                  name: 'Naia',
                  current_unit_price: '6.99',
                  quantity: 2,
                  image_url: 'https://media-verticommnetwork1.netdna-ssl.com/wines/naia-1653492-s350_d.jpg',
                  brand: 'Bodegas Naia'

                }
              }
            ]
          }
        }
      ]
    }
  }

};

jest.mock('./../../commonComponents/header/Header', () => 'MockedItemComponent');
jest.mock('./../../commonComponents/shoppingCartSummary/ShoppingCartSummary', () => 'MockedShoppingCartSummary Component');
jest.mock('./../../commonComponents/orderSummary/OrderSummary', () => 'MockedOrderSummaryComponent');

describe('Given the ShoppingCart component', () => {
  beforeEach(() => {
    jest.spyOn(productActions, 'loadShoppingCart').mockReturnValueOnce({ type: '' });
  });

  describe('When it is rendered for the first time', () => {
    test('Then the action loadShoppingCart should be called', () => {
      const store = mockStore({
        shoppingCart: shoppingCartMockedData
      });
      render(<Provider store={store}>
        <ShoppingCart />
      </Provider>);

      expect(productActions.loadShoppingCart).toHaveBeenCalled();
    });
  });

  test('Then the SnapShot should match the rendered tree', () => {
    const store = mockStore({
      shoppingCart: shoppingCartMockedData
    });
    const tree = render(<Provider store={store}>
      <ShoppingCart />
                        </Provider>);

    expect(tree).toMatchSnapshot();
  });
});

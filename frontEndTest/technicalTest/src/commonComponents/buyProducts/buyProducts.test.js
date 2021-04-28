// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import BuyProducts from './BuyProducts';

jest.mock('./../Item/Item', () => 'MockedItemComponent');

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

describe('Given the BuyProducts component', () => {
  describe('When it is rendered', () => {
    describe('When the backToCartButton button is pressed', () => {
      test('Then the navigation.navigate function should be called', () => {
        const store = mockStore({
          shoppingCart: shoppingCartMockedData
        });
        const navigation = { navigate: jest.fn() };
        jest.spyOn(navigation, 'navigate');

        const { getByTestId } = render(<Provider store={store}>
          <BuyProducts navigation={navigation} />
        </Provider>);

        fireEvent.press(getByTestId('backToCartButton'));

        expect(navigation.navigate).toHaveBeenCalled();
      });
    });
  });
});

// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Item from './Item';
import * as productActions from '../../redux/actions/productsRelatedActions';
import { productCasuistic } from '../../utils/noMagicStrings';

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
const productMockedData = shoppingCartMockedData.data.stores.data[0].relationships.items[0];
const storeDataMocked = {
  storeId: 350,
  storename: 'Vinos Baco'
};

describe('Given the Item component', () => {
  beforeEach(() => {
    jest.spyOn(productActions, 'increaseDecreaseQuantity').mockReturnValueOnce({ type: '' });
  });

  describe('When it is rendered as part of the buy page', () => {
    describe('When the add button is pressed', () => {
      test('Then the action increaseDecreaseQuantity should be called', () => {
        const store = mockStore({
          shoppingCart: shoppingCartMockedData
        });
        const { getByTestId } = render(<Provider store={store}>
          <Item
            product={productMockedData}
            storeData={storeDataMocked}
            casuistic={productCasuistic.buy}
          />
        </Provider>);

        fireEvent.press(getByTestId('addToCarButton'));

        expect(productActions.increaseDecreaseQuantity).toHaveBeenCalled();
      });
    });
  });

  describe('When it is rendered as part of the buy shoppingCartSummary', () => {
    describe('When the add button is pressed', () => {
      test('Then the action increaseDecreaseQuantity should be called', () => {
        const store = mockStore({
          shoppingCart: shoppingCartMockedData
        });
        const { getByTestId } = render(<Provider store={store}>
          <Item
            product={productMockedData}
            storeData={storeDataMocked}
            casuistic={productCasuistic.shoppingCartSummary}
          />
        </Provider>);

        fireEvent.press(getByTestId('increaseButton'));

        expect(productActions.increaseDecreaseQuantity).toHaveBeenCalled();
      });
    });
    describe('When the decrease button is pressed', () => {
      test('Then the action increaseDecreaseQuantity should be called', () => {
        const store = mockStore({
          shoppingCart: shoppingCartMockedData
        });
        const { getByTestId } = render(<Provider store={store}>
          <Item
            product={productMockedData}
            storeData={storeDataMocked}
            casuistic={productCasuistic.shoppingCartSummary}
          />
        </Provider>);

        fireEvent.press(getByTestId('decreaseButton'));

        expect(productActions.increaseDecreaseQuantity).toHaveBeenCalled();
      });
    });
  });
});

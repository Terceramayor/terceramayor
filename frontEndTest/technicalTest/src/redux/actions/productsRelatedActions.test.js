import axios from 'axios';
import { loadShoppingCart, increaseDecreaseQuantity } from './productsRelatedActions';
import { operation, petitionRoutes } from '../../utils/noMagicStrings';
import deleteAddproduct from '../../utils/deleteAddproduct';
import configureStore from '../store/configureStore';

jest.mock('axios');
jest.mock('../../utils/deleteAddproduct');

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
        }, {
          id: 250,
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

describe('Given the actions defined in productsRelatedActions ', () => {
  let fakeStore;
  beforeEach(() => {
    fakeStore = configureStore({});
  });

  describe('Given the increaseDecreaseQuantity function ', () => {
    describe('When it is invoked to increase the queantity ', () => {
      test('Then the returned object should have 2 stores', () => {
        deleteAddproduct.mockImplementationOnce(() => []);
        const fnReturn = increaseDecreaseQuantity(
          1653492,
          350,
          shoppingCartMockedData,
          operation.add
        );
        expect(fnReturn.data.data.stores.data.length).toBe(2);
      });
    });
  });

  describe('Given the loadShoppingCart function ', () => {
    describe('When it is invoked ', () => {
      test('Then the axios method get should have been called with the correct petition route', async () => {
        const axiosReturnMockedData = { data: ['mockedArray'] };
        axios.get = jest.fn().mockImplementationOnce(() => axiosReturnMockedData);
        fakeStore.dispatch = jest.fn(fakeStore.dispatch);

        const loadShoppingCartReturnFn = loadShoppingCart();
        await loadShoppingCartReturnFn(fakeStore.dispatch);
        expect(axios.get).toHaveBeenCalledWith(petitionRoutes.drinksAndCo);
      });
    });
  });
});

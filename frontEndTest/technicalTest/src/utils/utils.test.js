import deleteAddproduct from './deleteAddproduct';
import oderSumarryCosts from './oderSumarryCosts';
import { operation } from './noMagicStrings';

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
const productMockedData = shoppingCartMockedData.data.stores.data[0].relationships.items;

// ==============================================================

describe('Given the deleteAddproduct function ', () => {
  describe('When it is invoked with an specific product ID and operation.add', () => {
    test('Then quantity for that product should be 4', () => {
      const response = deleteAddproduct(productMockedData, 434531, operation.add);

      expect(response[0].attributes.quantity).toBe(4);
    });
  });

  describe('When it is invoked with an specific product ID and operation.delete', () => {
    test('Then quantity for that product should be 2', () => {
      const response = deleteAddproduct(productMockedData, 1653492, operation.delete);

      expect(response[1].attributes.quantity).toBe(1);
    });
  });
});

// ==============================================================

describe('Given the oderSumarryCosts function ', () => {
  describe('When it is invoked with an specific cart as input argument', () => {
    test('Then...', () => {
      const response = oderSumarryCosts(shoppingCartMockedData);

      expect(response.total).toBe('121.79');
      expect(response.gross).toBe('104.99');
      expect(response.taxes).toBe('16.80');
    });
  });
});

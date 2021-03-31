import 'babel-polyfill';
import { createArrayOfProducts, uploadScript } from './postMassivelyProducts';
import uploadMassiveProductList from './uploadMassiveProductList';

jest.mock('./uploadMassiveProductList');

jest.mock('axios');

describe('Given the function createArrayOfProducts', () => {
  describe('When it it is invoked with three brands, three models and three extra info', () => {
    test('Then, an array of 81 elements will be created', () => {
      const fakeCatalog = createArrayOfProducts('a', ['a', 'b', 'c'], ['a', 'b', 'c'], ['a', 'b', 'c'], [100, 200], ['a', 'b', 'c']);

      expect(fakeCatalog.length).toBe(27);
    });
  });
});

describe('Given the function uploadScript', () => {
  describe('When it it is invoked', () => {
    test('Then, the function uploadMassiveProductList will be invoked three times', () => {
      uploadScript();

      expect(uploadMassiveProductList).toHaveBeenCalledTimes(3);
    });
  });
});

import 'babel-polyfill';
import axios from 'axios';

import uploadMassiveProductList from './uploadMassiveProductList';

jest.mock('axios');

describe('Given the function createArrayOfProducts', () => {
  describe('When it it is invoked with three brands, three models and three extra info', () => {
    test('Then, an array of 81 elements will be created', () => {
      axios.port = jest.fn();
      uploadMassiveProductList(['a', 'b', 'c', 'd', 'e', 'f']);

      expect(axios.post).toHaveBeenCalledTimes(6);
    });
  });
});

import 'babel-polyfill';

const productActionsController = require('./controller');

const Product = require('../models/productModel');

jest.mock('../models/productModel');

describe('Given the controller function productActionsController', () => {
  describe('When the createProduct method is invoked with a valid required object', () => {
    test('Then the response.json method should have been called', () => {
      const response = { json: jest.fn() };

      productActionsController.createProduct({}, response);

      expect(response.json).toHaveBeenCalled();
    });
  });

  describe('When the createProduct method is invoked and the new product could not be created', () => {
    test('Then the response.status method should have been called', () => {
      const required = { };
      const response = {
        status: jest.fn(),
        send: jest.fn()
      };
      Product.mockImplementationOnce(() => { throw new Error('Error fetching product'); });
      productActionsController.createProduct(required, response);

      expect(response.status).toHaveBeenCalled();
    });
  });

  // ================================================================================

  describe('When the getProduct method is invoked with a valid required object', () => {
    test('Then the response.json method should have been called', async () => {
      const required = { params: { itemId: 'fake_id' } };
      const response = { json: jest.fn() };
      Product.find = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockImplementationOnce(() => ('dummy_data')) }));
      await productActionsController.getProduct(required, response);

      expect(response.json).toHaveBeenCalled();
    });
  });

  describe('When the getProduct method is invoked and the new product could not be created', () => {
    test('Then the response.status method should have been called', async () => {
      const required = { params: { itemId: 'fake_id' } };
      const response = {
        status: jest.fn(),
        send: jest.fn()
      };
      Product.find = jest.fn().mockImplementationOnce(() => (
        { exec: jest.fn().mockImplementationOnce(() => {}) }));

      await productActionsController.getProduct(required, response);

      expect(response.status).toHaveBeenCalled();
    });
  });

  // ================================================================================

  describe('When the getAllProducts method is invoked with a valid required object', () => {
    test('Then the response.json method should have been called', async () => {
      const response = { json: jest.fn() };
      Product.find = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockImplementationOnce(() => ('dummy_data')) }));
      await productActionsController.getAllProducts({}, response);

      expect(response.json).toHaveBeenCalled();
    });
  });

  describe('When the getAllProducts method is invoked and the new product could not be created', () => {
    test('Then the response.status method should have been called', async () => {
      const response = {
        status: jest.fn(),
        send: jest.fn()
      };
      Product.find = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockImplementationOnce(() => { throw new Error('Error fetching products'); }) }));
      await productActionsController.getAllProducts({}, response);

      expect(response.status).toHaveBeenCalled();
    });
  });
});

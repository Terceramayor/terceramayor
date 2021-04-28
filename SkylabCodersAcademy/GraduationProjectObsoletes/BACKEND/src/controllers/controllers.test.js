const ratedProductController = require('./ratedProductsController');
const usersController = require('./usersController');
const RatedProduct = require('../models/ratedProductsModel');
const Users = require('../models/userModel');

jest.mock('../models/ratedProductsModel');
jest.mock('../models/userModel');

describe('Given the controller function ratedProductController', () => {
  describe('When the createProduct method is invoked with a valid required object', () => {
    test('Then the response.json method should have been called', () => {
      const response = { json: jest.fn() };

      ratedProductController.createProduct({}, response);

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
      RatedProduct.mockImplementationOnce(() => { throw new Error('Error fetching products'); });
      ratedProductController.createProduct(required, response);

      expect(response.status).toHaveBeenCalled();
    });
  });
  // ================================================================================

  describe('When the getAllProducts method is invoked with a valid required object', () => {
    test('Then the response.json method should have been called', async () => {
      const response = { json: jest.fn() };
      RatedProduct.find = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockImplementationOnce(() => ('dummy_data')) }));
      await ratedProductController.getAllProducts({}, response);

      expect(response.json).toHaveBeenCalled();
    });
  });
  describe('When the getAllProducts method is invoked and the new product could not be created', () => {
    test('Then the response.status method should have been called', () => {
      const required = 'dummy_data';
      const response = {
        status: jest.fn()
      };
      RatedProduct.mockImplementationOnce(() => { throw new Error('Error fetching products'); });

      ratedProductController.getAllProducts(required, response);

      expect(response.status).toHaveBeenCalled();
    });
  });

  // ================================================================================
  describe('When the updateProductStats method is invoked with a valid required object', () => {
    test('Then the response.json method should have been called', async () => {
      const response = { json: jest.fn() };
      const required = { body: { _id: 'mockedId' } };
      RatedProduct.findByIdAndUpdate = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockImplementationOnce(() => ('dummy_data')) }));

      await ratedProductController.updateProductStats(required, response);

      expect(response.json).toHaveBeenCalled();
    });
  });
  describe('When the updateProductStats method is invoked and the new product could not be created', () => {
    test('Then the response.status method should have been called', () => {
      const required = { body: { _id: 'mockedId' } };
      const response = {
        status: jest.fn(),
        send: jest.fn()
      };
      RatedProduct.mockImplementationOnce(() => { throw new Error('Error fetching products'); });
      ratedProductController.updateProductStats(required, response);

      expect(response.status).toHaveBeenCalled();
    });
  });
});

// ================================================================================

// ================================================================================

describe('Given the controller function usersController', () => {
  describe('When the register method is invoked with a new user credentials', () => {
    test('Then the response.json method should have been called with true', async () => {
      const response = { send: jest.fn() };
      const required = { body: { username: 'mockedName', password: 'mockedPassword' } };
      Users.findOne = jest.fn().mockImplementationOnce(() => (
        { exec: jest.fn().mockImplementationOnce(() => null) }));
      Users.mockImplementationOnce(() => ({ save: jest.fn() }));

      await usersController.register(required, response);
      expect(response.send).toHaveBeenCalledWith(true);
    });
  });

  describe('When the register method is invoked with an añready existing user', () => {
    test('Then the response.send method should have been called with false', async () => {
      const response = { send: jest.fn() };
      const required = { body: { username: 'mockedName', password: 'mockedPassword' } };
      Users.findOne = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockImplementationOnce(() => 'mockedUser') }));

      await usersController.register(required, response);
      expect(response.send).toHaveBeenCalledWith(false);
    });
  });

  describe('When the register method is invoked and the new product could not be created', () => {
    test('Then the response.status method should have been called', () => {
      const required = { body: { username: 'mockedName', password: 'mockedPassword' } };
      const response = {
        status: jest.fn(),
        send: jest.fn()
      };
      RatedProduct.mockImplementationOnce(() => { throw new Error('Error fetching products'); });
      usersController.register(required, response);

      expect(response.status).toHaveBeenCalled();
    });
  });
  // ================================================================================

  describe('When the logIn method is invoked', () => {
    test('Then the response.json method should have been called', () => {
      const response = {
        json: jest.fn(),
        status: jest.fn()
      };
      const required = { body: 'mockedBody' };

      usersController.logIn(required, response);
      expect(response.json).toHaveBeenCalledWith(required.body);
    });
  });

  describe('When the logOut method is invoked with an añready existing user', () => {
    test('Then the response.json method should have been called', () => {
      const response = {
        status: jest.fn(),
        json: jest.fn()
      };
      const required = { logout: jest.fn() };

      usersController.logOut(required, response);
      expect(response.json).toHaveBeenCalledWith(required.body);
    });
  });
});

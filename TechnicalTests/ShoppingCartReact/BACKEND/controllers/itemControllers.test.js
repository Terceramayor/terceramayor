const itemsActionsController = require('./itemControllers.js');
const ProductItems = require('../models/itemModel');

jest.mock('./../models/itemModel');

const mockItem = {
  _id: '6030e4b06b13af2698622354',
  name: 'Photoprotector',
  price: 95.99,
  product_range: '60303245eb80a20c9cef2475',
  stock: 8,
  __v: 0,
  image_url: 'https://i.ibb.co/mcLgQZr/cerave-crema.jpg'
};

describe('Given the itemControllers function', () => {
  describe('When the createItem function is invoked with a valid object', () => {
    test('Then, the json function is called with the object as argument', () => {
      const require = { body: mockItem };
      const response = {
        json: jest.fn()

      };
      itemsActionsController.createItem(require, response);

      expect(response.json).toHaveBeenCalled();
    });
  });

  describe('When the createItem function is invoked with an valid object', () => {
    test('Then, the response status is invoked with the argument 500', () => {
      const require = { body: 'mockItem' };
      const response = {
        status: jest.fn(),
        send: jest.fn()

      };
      itemsActionsController.createItem(require, response);

      expect(response.status).toHaveBeenCalledWith(500);
    });
  });

  describe('When the getAllItems function is invoked with an valid object', () => {
    test('Then, the json response method is called', async () => {
      ProductItems.find.mockImplementationOnce(() => ({ populate: jest.fn(() => [1, 2, 3]) }));

      const response = {
        json: jest.fn()
      };

      await itemsActionsController.getAllItems(require, response);

      expect(response.json).toHaveBeenCalled();

      ProductItems.find.mockRestore();
    });
  });

  describe('When the getAllItems function is invoked with an invalid object', () => {
    test('Then, the response status is invoked with the argument 500', async () => {
      ProductItems.find.mockImplementationOnce(() => { throw new Error('Error fetching Items'); });

      const response = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };

      await itemsActionsController.getAllItems(require, response);

      expect(response.status).toHaveBeenCalledWith(500);

      ProductItems.find.mockRestore();
    });
  });

  describe('When the getOneItem function is invoked with an valid object', () => {
    test('Then, the response json is invoked ', async () => {
      ProductItems.findById.mockImplementationOnce(() => ({ exec: jest.fn(() => [1, 2, 3]) }));
      const response = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };

      const require = { params: { itemId: 1 } };

      await itemsActionsController.getOneItem(require, response);

      expect(response.json).toHaveBeenCalled();

      ProductItems.find.mockRestore();
    });
  });

  describe('When the getOneItem function is invoked with an invalid object', () => {
    test('Then, the response status is invoked ', async () => {
      ProductItems.findById.mockImplementationOnce(() => { throw new Error('Error fetching Items'); });
      const response = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };

      const require = { params: { itemId: 1 } };

      await itemsActionsController.getOneItem(require, response);

      expect(response.status).toHaveBeenCalledWith(500);

      ProductItems.find.mockRestore();
    });
  });

  describe('When the getSingleitem function is invoked with an valid object', () => {
    test('Then, the response json is invoked ', async () => {
      ProductItems.findById.mockImplementationOnce(() => ({ populate: jest.fn(() => [1, 2, 3]) }));
      const response = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };

      const require = { body: { _id: 1 } };

      await itemsActionsController.getSingleitem(require, response);

      expect(response.json).toHaveBeenCalled();

      ProductItems.find.mockRestore();
    });
  });

  describe('When the getOnegetSingleitemItem function is invoked with an invalid object', () => {
    test('Then, the response status is invoked ', async () => {
      ProductItems.findById.mockImplementationOnce(() => { throw new Error('Error fetching Items'); });
      const response = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };

      const require = { body: { _id: 1 } };

      await itemsActionsController.getSingleitem(require, response);

      expect(response.status).toHaveBeenCalledWith(500);

      ProductItems.find.mockRestore();
    });
  });

  describe('When the deleteItem function is invoked with an valid object', () => {
    test('Then, the response json is invoked ', async () => {
      ProductItems.findOneAndDelete.mockImplementationOnce(() => ([1, 2, 3]));
      const response = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };

      const require = { params: { itemId: 1 } };

      await itemsActionsController.deleteItem(require, response);

      expect(response.json).toHaveBeenCalled();

      ProductItems.find.mockRestore();
    });
  });

  describe('When the deleteItem function is invoked with an invalid object', () => {
    test('Then, the response status is invoked ', async () => {
      ProductItems.findOneAndDelete.mockImplementationOnce(() => { throw new Error('Error fetching Items'); });
      const response = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };

      const require = { params: { itemId: 1 } };

      await itemsActionsController.deleteItem(require, response);

      expect(response.status).toHaveBeenCalledWith(500);

      ProductItems.find.mockRestore();
    });
  });

  describe('When the updateItem function is invoked with an valid object', () => {
    test('Then, the response json is invoked ', async () => {
      ProductItems.findByIdAndUpdate.mockImplementationOnce(() => ([1, 2, 3]));
      const response = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };

      const require = { params: { itemId: 1 } };

      await itemsActionsController.updateItem(require, response);

      expect(response.json).toHaveBeenCalled();

      ProductItems.find.mockRestore();
    });
  });

  describe('When the updateItem function is invoked with an invalid object', () => {
    test('Then, the response status is invoked ', async () => {
      ProductItems.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error('Error fetching Items'); });
      const response = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };

      const require = { params: { itemId: 1 } };

      await itemsActionsController.updateItem(require, response);

      expect(response.status).toHaveBeenCalledWith(500);

      ProductItems.find.mockRestore();
    });
  });
});

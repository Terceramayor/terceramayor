// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import ContinueShopping from './ContinueShopping';

jest.mock('./../../commonComponents/header/Header', () => 'MockedItemComponent');
jest.mock('./../../commonComponents/buyProducts/BuyProducts', () => 'MockedBuyProductsComponent');

describe('Given the ContinueShopping component', () => {
  describe('When it is rendered', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const navigation = { navigate: jest.fn() };
      jest.spyOn(navigation, 'navigate');

      const tree = render(<ContinueShopping navigation={navigation} />);

      expect(tree).toMatchSnapshot();
    });
  });
});

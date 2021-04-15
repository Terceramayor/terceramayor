// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import Header from './Header';

describe('Given the Header component', () => {
  describe('When it is rendered', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const tree = render(<Header />);

      expect(tree).toMatchSnapshot();
    });
  });
  describe('When it is rendered', () => {
    describe('When the contacto button is pressed', () => {
      test('Then the SnapShot should match the rendered tree', () => {
        const tree = render(<Header />);
        fireEvent.press(tree.getByTestId('ContactButton'));

        expect(tree).toMatchSnapshot();
      });
    });
  });
  describe('When the createAccount button is pressed', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const tree = render(<Header />);
      fireEvent.press(tree.getByTestId('CreateAccountButton'));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When the closeContactModalButton is pressed', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const tree = render(<Header />);
      fireEvent.press(tree.getByTestId('closeContactModalButton'));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When the upperCloseCreateAccountModalButton is pressed', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const tree = render(<Header />);
      fireEvent.press(tree.getByTestId('upperCloseCreateAccountModalButton'));

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When the lowerCloseCreateAccountModalButton is pressed', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const tree = render(<Header />);
      fireEvent.press(tree.getByTestId('lowerCloseCreateAccountModalButton'));

      expect(tree).toMatchSnapshot();
    });
  });
});

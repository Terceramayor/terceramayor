// eslint-disable-next-line no-use-before-define
import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import { render } from '@testing-library/react-native';

describe('Given the NavBar component', () => {
  beforeEach(() => {

  });

  describe('When it is rendered as top rated', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const tree = render(<WelcomeScreen/>);
      expect(tree).toMatchSnapshot();
    });
  });
});

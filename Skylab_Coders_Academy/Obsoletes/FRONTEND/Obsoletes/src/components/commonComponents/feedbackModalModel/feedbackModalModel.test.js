// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render } from '@testing-library/react-native';

import FeedbackModalModel from './FeedbackModalModel';

describe('Given the FeedbackModalModel component', () => {
  describe('When it is renderedthe for the first time', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const tree = render(<FeedbackModalModel/>);

      expect(tree).toMatchSnapshot();
    });
  });
});

// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import * as actionsProductStats from '../../../redux/actions/actionsObsoletesProductStats';
import ProductProfile from './ProductProfile';
import { scoreToColor } from '../../../utils/scoreToColor';

import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
jest.mock('../../../utils/scoreToColor');

const mockedProductObsoletes = {
  _id: '6047b993a3106f69e02d67c7',
  originId: '30493083045',
  productName: 'MiXiao Lite sl 45',
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  brand: 'SumSag',
  category: 'smartPhone',
  place: 'obsoletes',
  obsoletion: 0.14,
  stats: [
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2017-01-04T00:00:00.000Z',
      broken: false,
      brokenDate: null,
      user: 'Pablo',
      reason: ''
    }
  ],
  __v: 0,
  updatedDate: '2019-12-01T00:00:00.000Z'
};

describe('Given the ProductProfile component', () => {
  beforeEach(() => {
    jest.spyOn(actionsProductStats, 'loadProduct').mockReturnValueOnce({ type: '' });
  });

  describe('When it is rendered as top rated', () => {
    test('Then the SnapShot should match the rendered tree', () => {
      const store = mockStore({});
      scoreToColor.mockImplementationOnce(() => { return 100; });
      const navigation = { navigate: jest.fn() };
      const tree = render(<Provider store={store}><ProductProfile singleProduct = {mockedProductObsoletes} navigation = {navigation}/></Provider>);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('When the product is pressed', () => {
    test('Then the loadProduct should have been called', () => {
      const store = mockStore({});
      scoreToColor.mockImplementationOnce(() => { return 100; });
      const navigation = { navigate: jest.fn() };

      const { getByTestId } = render(<Provider store={store}><ProductProfile singleProduct = {mockedProductObsoletes} navigation = {navigation}/></Provider>);
      fireEvent.press(getByTestId('profileGoToStats'));
      expect(actionsProductStats.loadProduct).toHaveBeenCalled();
    });
  });
});

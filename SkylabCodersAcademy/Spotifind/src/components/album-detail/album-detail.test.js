import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AlbumDetail from './album-detail';

describe('Given an \'AlbumDetail\' function', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When it gets called', () => {
    test('Its return should render component TrackItem which has SPAN tag with className \'single__name\'', () => {
      // ACT
      act(() => {
        render(<AlbumDetail />, container);
      });
      const iElement = container.querySelector('span');
      // ASSERT
      expect(iElement.className).toBe('single__name');
    });
  });
});

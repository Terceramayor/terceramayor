import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TrackItem from './tracks';
import SingleTrack from './trackClass';

describe('Given a function TrackItem', () => {
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
  describe('When function renders \'TrackItem\' component', () => {
    test('It should create a section tag with className \'detail__tracks\'', () => {
      // ACT
      act(() => {
        render(<TrackItem />, container);
      });
      const section = container.querySelector('section');
      // ASSERT
      expect(section.className).toBe('detail__tracks');
    });
    test('It should create an H3 tag with content \'Tracks:\'', () => {
      // ACT
      act(() => {
        render(<TrackItem />, container);
      });
      const h3 = container.querySelector('h3');
      // ASSERT
      expect(h3.textContent).toBe('Tracks:');
    });
    test('It should create a div tag with className \'tracks__list\'', () => {
      // ACT
      act(() => {
        render(<TrackItem />, container);
      });
      const div = container.querySelector('div');
      // ASSERT
      expect(div.className).toBe('tracks__list');
    });
    test('It should render component \'SingleTrack\' which has a LI element with className \'list__single\'', () => {
      // ACT
      const oneTrack = {};
      act(() => {
        render(<SingleTrack obj={oneTrack} />, container);
        const li = container.querySelector('li');
        // ASSERT
        expect(li.className).toBe('list__single');
      });
    });
  });
});

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, fireEvent } from 'react-dom/test-utils';
import SingleTrack from './trackClass';

describe('Given a class constructor \'SingleTrack\'', () => {
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
  describe('When such constructor gets called', () => {
    test('It should create an object named \'SingleTrack\'', () => {

    });
    test('Class should have a \'name\' property', () => {
      // ARRANGE
      const props = {
        obj: {
          track_number: 1,
          id: '2',
          preview_url: 'http://',
          name: 'Trolasso'
        }
      };
      // ACT
      const itemName = new SingleTrack(props);
      // ASSERT
      expect(itemName.name).not.toBe(undefined);
    });
    test('Class should have an \'url\' property', () => {
      // ARRANGE
      const props = {
        obj: {
          track_number: 1,
          id: '2',
          preview_url: 'http://',
          name: 'Trolasso'
        }
      };
      // ACT
      const itemUrl = new SingleTrack(props);
      // ASSERT
      expect(itemUrl.address).not.toBe(undefined);
    });
    test('Class should have an \'audio\' property which creates a new Audio Object', () => {
      // ARRANGE
      const props = {
        obj: {
          track_number: 1,
          id: '2',
          preview_url: 'http://',
          name: 'Trolasso'
        }
      };
      // ACT
      const itemProp = new SingleTrack(props);
      // ASSERT
      expect(Boolean(itemProp.audio)).toBe(true);
    });
    test('Class should have a \'play\' method which has 2 properties', () => {
    // ACT
      const itemProp = new SingleTrack();
      // ASSERT
      expect(Boolean(itemProp.play)).toBe(true);
    }); // CON ESTO SABEMOS QUE EXISTE EL METODO, PERO EL COVERAGE NO ENTRA.

    test('Class should have a \'pause\' method which has 1 property', () => {
      // ACT
      const itemProp = new SingleTrack();
      // ASSERT
      expect(Boolean(itemProp.pause)).toBe(true);
    }); // CON ESTO SABEMOS QUE EXISTE EL METODO, PERO EL COVERAGE NO ENTRA.
  });
  describe('When such object gets rendered', () => {
    test('It should create an LI tag with className \'list__single\'', () => {
      // ACT
      act(() => {
        render(<SingleTrack />, container);
      });
      const li = container.querySelector('li');
      // ASSERT
      expect(li.className).toBe('list__single');
    });
    test('It should create a SPAN tag with \'{this.name}\' value as textContent', () => {
      // ACT
      act(() => {
        render(<SingleTrack />, container);
      });
      const span = container.querySelector('span');
      // ASSERT
      expect(span.className).toBe('single__name');
    });
    test('It should create a DIV tag with with className \'single__buttons\'', () => {
      act(() => {
        render(<SingleTrack />, container);
      });
      const div = container.querySelector('div');
      // ASSERT
      expect(div.className).toBe('single__buttons');
    });
    test('It should create an ICON tag with with className \'far fa-play-circle\'', () => {
      act(() => {
        render(<SingleTrack />, container);
      });
      const iItem = container.getElementsByTagName('i')[0];
      // ASSERT
      expect(iItem.className).toBe('far fa-play-circle');
    });
    test('It should create an ICON tag with with className \'far fa-pause-circle\'', () => {
      act(() => {
        render(<SingleTrack />, container);
      });
      const iItem = container.getElementsByTagName('i')[1];
      // ASSERT
      expect(iItem.className).toBe('far fa-pause-circle');
    });
    test('ICON label \'Play\' should have an onClick property which callbacks \'this.play()', () => {
      act(() => {
        render(<SingleTrack />, container);
      });
      const newObj = new SingleTrack();
      const spy = jest.spyOn(newObj, 'play');
      const buttonPlay = document.getElementsByClassName('far fa-play-circle')[0];

      fireEvent.click(buttonPlay);
      expect(spy).toHaveBeenCalled();
    });
  });
});

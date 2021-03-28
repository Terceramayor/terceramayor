import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import AlbumInfo from './album-info';

jest.mock('@auth0/auth0-react');

describe('Given a component AlbumInfo', () => {
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

  test('Renders a section with className detail__album-info', () => {
    // const mockedUseAuth0 = jest.fn(useAuth0, true);
    // const useAuth0 = jest.fn();

    act(() => {
      useAuth0.mockImplementation(() => ({ user: { name: 'Amaia' } }));
      render(<BrowserRouter><AlbumInfo /></BrowserRouter>, container);
    });

    const section = document.querySelector('section');
    // expect(section).toBe('detail__album-info');
    expect(section).toBeInTheDocument();
  });

  describe('When an artist name is clicked', () => {
    test('Then addTagByArtist function should be called', () => {
      act(() => {
        useAuth0.mockImplementation(() => ({ user: { name: 'Amaia' } }));
        render(<BrowserRouter><AlbumInfo /></BrowserRouter>, container);
      });
      const spy = jest.spyOn(AlbumInfo, 'addTagByArtist');

      const artistButton = document.getElementsByName('button')[0];
      // const addTagByArtist = jest.fn();

      // act(() => {
      //   artistButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      // });
      fireEvent.click(artistButton);
      expect(spy).toHaveBeenCalled();
    });
  });
});

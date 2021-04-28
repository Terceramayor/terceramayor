import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useAuth0 } from '@auth0/auth0-react';
import { fireEvent } from '@testing-library/react';
import UserFavsItem from './user-fav-item';
import * as Actions from '../../../../flux/actions/actions';
import { deleteFavourite } from '../../../../flux/actions/actions';

jest.mock('../../../../flux/actions/actions');
jest.mock('@auth0/auth0-react');

const mockArtist = {
  artist: 'Rowdy Rebel',
  id: '6LXRvV2OAtXF7685fzh3mj',
  artistObject: {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/6LXRvV2OAtXF7685fzh3mj'
    },
    followers: {
      href: null,
      total: 61900
    },
    genres: [
      'nyc rap'
    ],
    href: 'https://api.spotify.com/v1/artists/6LXRvV2OAtXF7685fzh3mj',
    id: '6LXRvV2OAtXF7685fzh3mj',
    images: [
      {
        height: 1000,
        url: 'https://i.scdn.co/image/65fd4a40b48c4300fa633f79ec85b0a7d7d92207',
        width: 1000
      },
      {
        height: 640,
        url: 'https://i.scdn.co/image/9843f5f876ec6d7411c2ab1799dd0a392a04201c',
        width: 640
      },
      {
        height: 200,
        url: 'https://i.scdn.co/image/3adf15e51d6c0c0a4380bbfbb724c25836eb1b2d',
        width: 200
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/1d00b2c23bf3671bdab636889e0dbdf5263041ee',
        width: 64
      }
    ],
    name: 'Rowdy Rebel',
    popularity: 64,
    type: 'artist',
    uri: 'spotify:artist:6LXRvV2OAtXF7685fzh3mj'
  }
};

describe('Given the recommendations based on seeds list item component', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  describe('When the component is rendered for an artist object and a defined possition', () => {
    test('A general div container with the class "card-artist-item" shall be created', () => {
      act(() => {
        useAuth0.mockImplementation(() => ({ user: { name: 'Pablo' } }));
        // eslint-disable-next-line react/jsx-filename-extension
        render(<UserFavsItem
          favouriteItem={mockArtist}
          possition={2}
        />, container);
      });

      const divContainerClass = document.querySelector('img').className;

      expect(divContainerClass).toBe('item__image');
    });
  });

  describe('When the cthe user clicks to trigger the deletion of a favourite artist that is present in the list', () => {
    test('the action deleteFavourite should be triggered', () => {
      deleteFavourite.mockImplementation(() => { 'Do nothing'; });
      act(() => {
        useAuth0.mockImplementation(() => ({ user: { name: 'Pablo' } }));
        // eslint-disable-next-line react/jsx-filename-extension
        render(<UserFavsItem
          favouriteItem={mockArtist}
          possition={2}
        />, container);
      });
      const spy = jest.spyOn(Actions, 'deleteFavourite');
      const button = document.getElementsByClassName('far fa-times-circle')[0];

      fireEvent.click(button);
      expect(spy).toHaveBeenCalled();
    });
  });
});

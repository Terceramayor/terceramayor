import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useAuth0 } from '@auth0/auth0-react';
import UserSummary from './user-summary';

jest.mock('@auth0/auth0-react');
const mockUserData = [
  {
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
  },
  {
    artist: 'NAV',
    id: '7rkW85dBwwrJtlHRDkJDAC',
    artistObject: {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/7rkW85dBwwrJtlHRDkJDAC'
      },
      followers: {
        href: null,
        total: 2359031
      },
      genres: [
        'canadian hip hop',
        'hip hop',
        'melodic rap',
        'pop rap',
        'rap',
        'toronto rap',
        'trap'
      ],
      href: 'https://api.spotify.com/v1/artists/7rkW85dBwwrJtlHRDkJDAC',
      id: '7rkW85dBwwrJtlHRDkJDAC',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/6938bbdfc026ad49495b5564a0641a9da6fbd970',
          width: 640
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/9c3c00186b2823a52e12d3f7f96157f9e5279788',
          width: 320
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/c879e1550bbc65c9e4ad55eba7375bffe7fc065e',
          width: 160
        }
      ],
      name: 'NAV',
      popularity: 87,
      type: 'artist',
      uri: 'spotify:artist:7rkW85dBwwrJtlHRDkJDAC'
    }
  }
];

const mockUserData2 = [
  {
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
        'nyc rap',
        'melodic rap',
        'pop rap'
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
  },
  {
    artist: 'NAV',
    id: '7rkW85dBwwrJtlHRDkJDAC',
    artistObject: {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/7rkW85dBwwrJtlHRDkJDAC'
      },
      followers: {
        href: null,
        total: 2359031
      },
      genres: [
        'canadian hip hop',
        'hip hop',
        'melodic rap',
        'pop rap',
        'rap',
        'toronto rap',
        'trap'
      ],
      href: 'https://api.spotify.com/v1/artists/7rkW85dBwwrJtlHRDkJDAC',
      id: '7rkW85dBwwrJtlHRDkJDAC',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/6938bbdfc026ad49495b5564a0641a9da6fbd970',
          width: 640
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/9c3c00186b2823a52e12d3f7f96157f9e5279788',
          width: 320
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/c879e1550bbc65c9e4ad55eba7375bffe7fc065e',
          width: 160
        }
      ],
      name: 'NAV',
      popularity: 87,
      type: 'artist',
      uri: 'spotify:artist:7rkW85dBwwrJtlHRDkJDAC'
    }
  }
];

describe('Given the favourites list item component', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  describe('When the component is rendered for an artist object ', () => {
    test('A section container with the class "cuser-profile__summary" shall be created', () => {
      act(() => {
        useAuth0.mockImplementation(() => ({ user: { name: 'Pablo' } }));
        // eslint-disable-next-line react/jsx-filename-extension
        render(<UserSummary
          userData={mockUserData}
        />, container);
      });

      const divContainerClass = document.querySelector('section').className;

      expect(divContainerClass).toBe('user-profile__summary');
    });
  });

  describe('When the component is rendered for an artist object with a common genre ', () => {
    test('A section container with the class "cuser-profile__summary" shall be created', () => {
      act(() => {
        useAuth0.mockImplementation(() => ({ user: { name: 'Pablo' } }));
        // eslint-disable-next-line react/jsx-filename-extension
        render(<UserSummary
          userData={mockUserData2}
        />, container);
      });

      const divContainerClass = document.querySelector('section').className;

      expect(divContainerClass).toBe('user-profile__summary');
    });
  });
});

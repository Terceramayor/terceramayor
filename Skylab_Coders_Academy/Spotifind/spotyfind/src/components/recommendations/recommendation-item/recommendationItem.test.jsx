import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecommendationItem from './recommendationItem';

describe('Given the RecommendationItem component', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  describe('when the component is rendered', () => {
    test('A general div container is created with the appropiate className attribute', () => {
      act(() => {
        const recommendation = {
          album_type: 'single',
          artists: [{
            external_urls: { spotify: 'https://open.spotify.com/artist/6MDME20pz9RveH9rEXvrOM' },
            href: 'https://api.spotify.com/v1/artists/6MDME20pz9RveH9rEXvrOM',
            id: '6MDME20pz9RveH9rEXvrOM',
            name: 'Clean Bandit',
            type: 'artist',
            uri: 'spotify:artist:6MDME20pz9RveH9rEXvrOM'
          },

          {
            external_urls: { spotify: 'https://open.spotify.com/artist/6ASri4ePR7RlsvIQgWPJpS' },
            href: 'https://api.spotify.com/v1/artists/6ASri4ePR7RlsvIQgWPJpS',
            id: '6ASri4ePR7RlsvIQgWPJpS',
            name: 'iann dior',
            type: 'artist',
            uri: 'spotify:artist:6ASri4ePR7RlsvIQgWPJpS'
          }],

          available_markets: ['AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG', 'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP', 'KR', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN', 'XK', 'ZA'],
          external_urls: { spotify: 'https://open.spotify.com/album/78MU91n8U1OTN0Co9OgQHw' },
          href: 'https://api.spotify.com/v1/albums/78MU91n8U1OTN0Co9OgQHw',
          id: '78MU91n8U1OTN0Co9OgQHw',
          images: [{
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2734628636f03999328ba098839',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e024628636f03999328ba098839',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048514628636f03999328ba098839',
            width: 64
          }],
          name: 'Higher (feat. iann dior)',
          release_date: '2021-01-29',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:78MU91n8U1OTN0Co9OgQHw'

        };
        render(<BrowserRouter>

          <RecommendationItem currentRecommendation={recommendation} />

               </BrowserRouter>, container);

        //   fireEvent.click(button);
      });
      const generalDiv = document.getElementsByTagName('div')[1].className;
      expect(generalDiv).toBe('recommendations__item');
    });

    test('A list container is created with the appropiate artist name', () => {
      act(() => {
        const recommendation = {
          album_type: 'single',
          artists: [{
            external_urls: { spotify: 'https://open.spotify.com/artist/6MDME20pz9RveH9rEXvrOM' },
            href: 'https://api.spotify.com/v1/artists/6MDME20pz9RveH9rEXvrOM',
            id: '6MDME20pz9RveH9rEXvrOM',
            name: 'Clean Bandit',
            type: 'artist',
            uri: 'spotify:artist:6MDME20pz9RveH9rEXvrOM'
          },

          {
            external_urls: { spotify: 'https://open.spotify.com/artist/6ASri4ePR7RlsvIQgWPJpS' },
            href: 'https://api.spotify.com/v1/artists/6ASri4ePR7RlsvIQgWPJpS',
            id: '6ASri4ePR7RlsvIQgWPJpS',
            name: 'iann dior',
            type: 'artist',
            uri: 'spotify:artist:6ASri4ePR7RlsvIQgWPJpS'
          }],

          available_markets: ['AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG', 'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP', 'KR', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN', 'XK', 'ZA'],
          external_urls: { spotify: 'https://open.spotify.com/album/78MU91n8U1OTN0Co9OgQHw' },
          href: 'https://api.spotify.com/v1/albums/78MU91n8U1OTN0Co9OgQHw',
          id: '78MU91n8U1OTN0Co9OgQHw',
          images: [{
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2734628636f03999328ba098839',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e024628636f03999328ba098839',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048514628636f03999328ba098839',
            width: 64
          }],
          name: 'Higher (feat. iann dior)',
          release_date: '2021-01-29',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:78MU91n8U1OTN0Co9OgQHw'

        };
        render(<BrowserRouter>
          <RecommendationItem currentRecommendation={recommendation} />
               </BrowserRouter>, container);
      });
      const listElement = document.getElementsByTagName('li')[0].className;
      expect(listElement).toBe('artists-list');
    });

    describe('When an album image is clicked', () => {
      test('the function "recommendationDetail" shall be triggered', () => {
        act(() => {
          const recommendation = {
            album_type: 'single',
            artists: [{
              external_urls: { spotify: 'https://open.spotify.com/artist/6MDME20pz9RveH9rEXvrOM' },
              href: 'https://api.spotify.com/v1/artists/6MDME20pz9RveH9rEXvrOM',
              id: '6MDME20pz9RveH9rEXvrOM',
              name: 'Clean Bandit',
              type: 'artist',
              uri: 'spotify:artist:6MDME20pz9RveH9rEXvrOM'
            },

            {
              external_urls: { spotify: 'https://open.spotify.com/artist/6ASri4ePR7RlsvIQgWPJpS' },
              href: 'https://api.spotify.com/v1/artists/6ASri4ePR7RlsvIQgWPJpS',
              id: '6ASri4ePR7RlsvIQgWPJpS',
              name: 'iann dior',
              type: 'artist',
              uri: 'spotify:artist:6ASri4ePR7RlsvIQgWPJpS'
            }],

            available_markets: ['AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG', 'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP', 'KR', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN', 'XK', 'ZA'],
            external_urls: { spotify: 'https://open.spotify.com/album/78MU91n8U1OTN0Co9OgQHw' },
            href: 'https://api.spotify.com/v1/albums/78MU91n8U1OTN0Co9OgQHw',
            id: '78MU91n8U1OTN0Co9OgQHw',
            images: [{
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2734628636f03999328ba098839',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e024628636f03999328ba098839',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048514628636f03999328ba098839',
              width: 64
            }],
            name: 'Higher (feat. iann dior)',
            release_date: '2021-01-29',
            release_date_precision: 'day',
            total_tracks: 1,
            type: 'album',
            uri: 'spotify:album:78MU91n8U1OTN0Co9OgQHw'

          };
          render(<BrowserRouter>
            <RecommendationItem currentRecommendation={recommendation} />
                 </BrowserRouter>, container);
        });
        const button = document.getElementsByClassName('item__buttom')[0];
        const spy = jest.spyOn(RecommendationItem.prototype, 'recommendationDetail');
        fireEvent.click(button);
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});

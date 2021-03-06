import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecommendationItemSeed from './recommendationItem-seed';

describe('Given the RecommendationItemSeed component', () => {
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
          album: {
            album_type: 'ALBUM',
            artists: [
              {
                external_urls: {
                  spotify: 'https://open.spotify.com/artist/5bOsFzuJ6QZMr86ezC4oXY'
                },
                href: 'https://api.spotify.com/v1/artists/5bOsFzuJ6QZMr86ezC4oXY',
                id: '5bOsFzuJ6QZMr86ezC4oXY',
                name: 'The Ink Spots',
                type: 'artist',
                uri: 'spotify:artist:5bOsFzuJ6QZMr86ezC4oXY'
              }
            ],
            available_markets: [
              'AD',
              'AE',
              'AL',
              'AR',
              'AT',
              'AU',
              'BA',
              'BE',
              'BG',
              'BH',
              'BO',
              'BR',
              'BY',
              'CA',
              'CH',
              'CL',
              'CO',
              'CR',
              'CY',
              'CZ',
              'DE',
              'DK',
              'DO',
              'DZ',
              'EC',
              'EE',
              'EG',
              'ES',
              'FI',
              'FR',
              'GB',
              'GR',
              'GT',
              'HK',
              'HN',
              'HR',
              'HU',
              'ID',
              'IE',
              'IL',
              'IN',
              'IS',
              'IT',
              'JO',
              'JP',
              'KR',
              'KW',
              'KZ',
              'LB',
              'LI',
              'LT',
              'LU',
              'LV',
              'MA',
              'MC',
              'MD',
              'ME',
              'MK',
              'MT',
              'MX',
              'MY',
              'NI',
              'NL',
              'NO',
              'NZ',
              'OM',
              'PA',
              'PE',
              'PH',
              'PL',
              'PS',
              'PT',
              'PY',
              'QA',
              'RO',
              'RS',
              'RU',
              'SA',
              'SE',
              'SG',
              'SI',
              'SK',
              'SV',
              'TH',
              'TN',
              'TR',
              'TW',
              'UA',
              'US',
              'UY',
              'VN',
              'XK',
              'ZA'
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/album/5kP2AlLe5EsHEx6y3HpJjN'
            },
            href: 'https://api.spotify.com/v1/albums/5kP2AlLe5EsHEx6y3HpJjN',
            id: '5kP2AlLe5EsHEx6y3HpJjN',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273383811a9b3081023c612fb7b',
                width: 640
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02383811a9b3081023c612fb7b',
                width: 300
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851383811a9b3081023c612fb7b',
                width: 64
              }
            ],
            name: 'The Anthology',
            release_date: '1998-06-16',
            release_date_precision: 'day',
            total_tracks: 48,
            type: 'album',
            uri: 'spotify:album:5kP2AlLe5EsHEx6y3HpJjN'
          },
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/5bOsFzuJ6QZMr86ezC4oXY'
              },
              href: 'https://api.spotify.com/v1/artists/5bOsFzuJ6QZMr86ezC4oXY',
              id: '5bOsFzuJ6QZMr86ezC4oXY',
              name: 'The Ink Spots',
              type: 'artist',
              uri: 'spotify:artist:5bOsFzuJ6QZMr86ezC4oXY'
            }
          ],
          available_markets: [
            'AD',
            'AE',
            'AL',
            'AR',
            'AT',
            'AU',
            'BA',
            'BE',
            'BG',
            'BH',
            'BO',
            'BR',
            'BY',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'DZ',
            'EC',
            'EE',
            'EG',
            'ES',
            'FI',
            'FR',
            'GB',
            'GR',
            'GT',
            'HK',
            'HN',
            'HR',
            'HU',
            'ID',
            'IE',
            'IL',
            'IN',
            'IS',
            'IT',
            'JO',
            'JP',
            'KR',
            'KW',
            'KZ',
            'LB',
            'LI',
            'LT',
            'LU',
            'LV',
            'MA',
            'MC',
            'MD',
            'ME',
            'MK',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'OM',
            'PA',
            'PE',
            'PH',
            'PL',
            'PS',
            'PT',
            'PY',
            'QA',
            'RO',
            'RS',
            'RU',
            'SA',
            'SE',
            'SG',
            'SI',
            'SK',
            'SV',
            'TH',
            'TN',
            'TR',
            'TW',
            'UA',
            'US',
            'UY',
            'VN',
            'XK',
            'ZA'
          ],
          disc_number: 2,
          duration_ms: 181066,
          explicit: false,
          external_ids: {
            isrc: 'USMC14147359'
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/777zXDJpBufzttU4AJ2dGO'
          },
          href: 'https://api.spotify.com/v1/tracks/777zXDJpBufzttU4AJ2dGO',
          id: '777zXDJpBufzttU4AJ2dGO',
          is_local: false,
          name: "I Don't Want To Set The World On Fire",
          popularity: 64,
          preview_url: null,
          track_number: 2,
          type: 'track',
          uri: 'spotify:track:777zXDJpBufzttU4AJ2dGO'
        };
        render(<BrowserRouter>

          <RecommendationItemSeed currentRecommendation={recommendation} />

               </BrowserRouter>, container);

        //   fireEvent.click(button);
      });
      const generalDiv = document.getElementsByTagName('div')[1].className;
      expect(generalDiv).toBe('recommendations__item');
    });

    test('A list container is created with the appropiate artist name', () => {
      act(() => {
        const recommendation = {
          album: {
            album_type: 'ALBUM',
            artists: [
              {
                external_urls: {
                  spotify: 'https://open.spotify.com/artist/5bOsFzuJ6QZMr86ezC4oXY'
                },
                href: 'https://api.spotify.com/v1/artists/5bOsFzuJ6QZMr86ezC4oXY',
                id: '5bOsFzuJ6QZMr86ezC4oXY',
                name: 'The Ink Spots',
                type: 'artist',
                uri: 'spotify:artist:5bOsFzuJ6QZMr86ezC4oXY'
              }
            ],
            available_markets: [
              'AD',
              'AE',
              'AL',
              'AR',
              'AT',
              'AU',
              'BA',
              'BE',
              'BG',
              'BH',
              'BO',
              'BR',
              'BY',
              'CA',
              'CH',
              'CL',
              'CO',
              'CR',
              'CY',
              'CZ',
              'DE',
              'DK',
              'DO',
              'DZ',
              'EC',
              'EE',
              'EG',
              'ES',
              'FI',
              'FR',
              'GB',
              'GR',
              'GT',
              'HK',
              'HN',
              'HR',
              'HU',
              'ID',
              'IE',
              'IL',
              'IN',
              'IS',
              'IT',
              'JO',
              'JP',
              'KR',
              'KW',
              'KZ',
              'LB',
              'LI',
              'LT',
              'LU',
              'LV',
              'MA',
              'MC',
              'MD',
              'ME',
              'MK',
              'MT',
              'MX',
              'MY',
              'NI',
              'NL',
              'NO',
              'NZ',
              'OM',
              'PA',
              'PE',
              'PH',
              'PL',
              'PS',
              'PT',
              'PY',
              'QA',
              'RO',
              'RS',
              'RU',
              'SA',
              'SE',
              'SG',
              'SI',
              'SK',
              'SV',
              'TH',
              'TN',
              'TR',
              'TW',
              'UA',
              'US',
              'UY',
              'VN',
              'XK',
              'ZA'
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/album/5kP2AlLe5EsHEx6y3HpJjN'
            },
            href: 'https://api.spotify.com/v1/albums/5kP2AlLe5EsHEx6y3HpJjN',
            id: '5kP2AlLe5EsHEx6y3HpJjN',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273383811a9b3081023c612fb7b',
                width: 640
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02383811a9b3081023c612fb7b',
                width: 300
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851383811a9b3081023c612fb7b',
                width: 64
              }
            ],
            name: 'The Anthology',
            release_date: '1998-06-16',
            release_date_precision: 'day',
            total_tracks: 48,
            type: 'album',
            uri: 'spotify:album:5kP2AlLe5EsHEx6y3HpJjN'
          },
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/5bOsFzuJ6QZMr86ezC4oXY'
              },
              href: 'https://api.spotify.com/v1/artists/5bOsFzuJ6QZMr86ezC4oXY',
              id: '5bOsFzuJ6QZMr86ezC4oXY',
              name: 'The Ink Spots',
              type: 'artist',
              uri: 'spotify:artist:5bOsFzuJ6QZMr86ezC4oXY'
            }
          ],
          available_markets: [
            'AD',
            'AE',
            'AL',
            'AR',
            'AT',
            'AU',
            'BA',
            'BE',
            'BG',
            'BH',
            'BO',
            'BR',
            'BY',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'DZ',
            'EC',
            'EE',
            'EG',
            'ES',
            'FI',
            'FR',
            'GB',
            'GR',
            'GT',
            'HK',
            'HN',
            'HR',
            'HU',
            'ID',
            'IE',
            'IL',
            'IN',
            'IS',
            'IT',
            'JO',
            'JP',
            'KR',
            'KW',
            'KZ',
            'LB',
            'LI',
            'LT',
            'LU',
            'LV',
            'MA',
            'MC',
            'MD',
            'ME',
            'MK',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'OM',
            'PA',
            'PE',
            'PH',
            'PL',
            'PS',
            'PT',
            'PY',
            'QA',
            'RO',
            'RS',
            'RU',
            'SA',
            'SE',
            'SG',
            'SI',
            'SK',
            'SV',
            'TH',
            'TN',
            'TR',
            'TW',
            'UA',
            'US',
            'UY',
            'VN',
            'XK',
            'ZA'
          ],
          disc_number: 2,
          duration_ms: 181066,
          explicit: false,
          external_ids: {
            isrc: 'USMC14147359'
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/777zXDJpBufzttU4AJ2dGO'
          },
          href: 'https://api.spotify.com/v1/tracks/777zXDJpBufzttU4AJ2dGO',
          id: '777zXDJpBufzttU4AJ2dGO',
          is_local: false,
          name: "I Don't Want To Set The World On Fire",
          popularity: 64,
          preview_url: null,
          track_number: 2,
          type: 'track',
          uri: 'spotify:track:777zXDJpBufzttU4AJ2dGO'
        };
        render(<BrowserRouter>
          <RecommendationItemSeed currentRecommendation={recommendation} />
               </BrowserRouter>, container);
      });
      const listElement = document.getElementsByTagName('li')[0].className;
      expect(listElement).toBe('artists-list');
    });

    describe('When an album image is clicked', () => {
      test('the function "recommendationDetail" shall be triggered', () => {
        act(() => {
          const recommendation = {
            album: {
              album_type: 'ALBUM',
              artists: [
                {
                  external_urls: {
                    spotify: 'https://open.spotify.com/artist/5bOsFzuJ6QZMr86ezC4oXY'
                  },
                  href: 'https://api.spotify.com/v1/artists/5bOsFzuJ6QZMr86ezC4oXY',
                  id: '5bOsFzuJ6QZMr86ezC4oXY',
                  name: 'The Ink Spots',
                  type: 'artist',
                  uri: 'spotify:artist:5bOsFzuJ6QZMr86ezC4oXY'
                }
              ],
              available_markets: [
                'AD',
                'AE',
                'AL',
                'AR',
                'AT',
                'AU',
                'BA',
                'BE',
                'BG',
                'BH',
                'BO',
                'BR',
                'BY',
                'CA',
                'CH',
                'CL',
                'CO',
                'CR',
                'CY',
                'CZ',
                'DE',
                'DK',
                'DO',
                'DZ',
                'EC',
                'EE',
                'EG',
                'ES',
                'FI',
                'FR',
                'GB',
                'GR',
                'GT',
                'HK',
                'HN',
                'HR',
                'HU',
                'ID',
                'IE',
                'IL',
                'IN',
                'IS',
                'IT',
                'JO',
                'JP',
                'KR',
                'KW',
                'KZ',
                'LB',
                'LI',
                'LT',
                'LU',
                'LV',
                'MA',
                'MC',
                'MD',
                'ME',
                'MK',
                'MT',
                'MX',
                'MY',
                'NI',
                'NL',
                'NO',
                'NZ',
                'OM',
                'PA',
                'PE',
                'PH',
                'PL',
                'PS',
                'PT',
                'PY',
                'QA',
                'RO',
                'RS',
                'RU',
                'SA',
                'SE',
                'SG',
                'SI',
                'SK',
                'SV',
                'TH',
                'TN',
                'TR',
                'TW',
                'UA',
                'US',
                'UY',
                'VN',
                'XK',
                'ZA'
              ],
              external_urls: {
                spotify: 'https://open.spotify.com/album/5kP2AlLe5EsHEx6y3HpJjN'
              },
              href: 'https://api.spotify.com/v1/albums/5kP2AlLe5EsHEx6y3HpJjN',
              id: '5kP2AlLe5EsHEx6y3HpJjN',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b273383811a9b3081023c612fb7b',
                  width: 640
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e02383811a9b3081023c612fb7b',
                  width: 300
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d00004851383811a9b3081023c612fb7b',
                  width: 64
                }
              ],
              name: 'The Anthology',
              release_date: '1998-06-16',
              release_date_precision: 'day',
              total_tracks: 48,
              type: 'album',
              uri: 'spotify:album:5kP2AlLe5EsHEx6y3HpJjN'
            },
            artists: [
              {
                external_urls: {
                  spotify: 'https://open.spotify.com/artist/5bOsFzuJ6QZMr86ezC4oXY'
                },
                href: 'https://api.spotify.com/v1/artists/5bOsFzuJ6QZMr86ezC4oXY',
                id: '5bOsFzuJ6QZMr86ezC4oXY',
                name: 'The Ink Spots',
                type: 'artist',
                uri: 'spotify:artist:5bOsFzuJ6QZMr86ezC4oXY'
              }
            ],
            available_markets: [
              'AD',
              'AE',
              'AL',
              'AR',
              'AT',
              'AU',
              'BA',
              'BE',
              'BG',
              'BH',
              'BO',
              'BR',
              'BY',
              'CA',
              'CH',
              'CL',
              'CO',
              'CR',
              'CY',
              'CZ',
              'DE',
              'DK',
              'DO',
              'DZ',
              'EC',
              'EE',
              'EG',
              'ES',
              'FI',
              'FR',
              'GB',
              'GR',
              'GT',
              'HK',
              'HN',
              'HR',
              'HU',
              'ID',
              'IE',
              'IL',
              'IN',
              'IS',
              'IT',
              'JO',
              'JP',
              'KR',
              'KW',
              'KZ',
              'LB',
              'LI',
              'LT',
              'LU',
              'LV',
              'MA',
              'MC',
              'MD',
              'ME',
              'MK',
              'MT',
              'MX',
              'MY',
              'NI',
              'NL',
              'NO',
              'NZ',
              'OM',
              'PA',
              'PE',
              'PH',
              'PL',
              'PS',
              'PT',
              'PY',
              'QA',
              'RO',
              'RS',
              'RU',
              'SA',
              'SE',
              'SG',
              'SI',
              'SK',
              'SV',
              'TH',
              'TN',
              'TR',
              'TW',
              'UA',
              'US',
              'UY',
              'VN',
              'XK',
              'ZA'
            ],
            disc_number: 2,
            duration_ms: 181066,
            explicit: false,
            external_ids: {
              isrc: 'USMC14147359'
            },
            external_urls: {
              spotify: 'https://open.spotify.com/track/777zXDJpBufzttU4AJ2dGO'
            },
            href: 'https://api.spotify.com/v1/tracks/777zXDJpBufzttU4AJ2dGO',
            id: '777zXDJpBufzttU4AJ2dGO',
            is_local: false,
            name: "I Don't Want To Set The World On Fire",
            popularity: 64,
            preview_url: null,
            track_number: 2,
            type: 'track',
            uri: 'spotify:track:777zXDJpBufzttU4AJ2dGO'
          };
          render(<BrowserRouter>
            <RecommendationItemSeed currentRecommendation={recommendation} />
                 </BrowserRouter>, container);
        });
        const button = document.getElementsByClassName('item__buttom')[0];
        const spy = jest.spyOn(RecommendationItemSeed.prototype, 'recommendationDetailSeed');
        fireEvent.click(button);
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});

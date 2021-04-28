import React from 'react';
import createUrlRecomendationsDashboard, { getRandomByLength } from './url-from-tags';

describe('Given a funciton getRandomByLength', () => {
  describe('When is invoked with an array of objects', () => {
    test('Then should return a random number no longer than it\'s length', () => {
      const object = [{ 1: '1' }, { 2: '2' }, { 3: '3' }, { 4: '4' }, { 5: '5' }];

      const result = getRandomByLength(object);

      expect(result).toBeLessThan(5);
    });
  });
});

describe('Given a function createUrlRecomendationsDashboard', () => {
  describe('When is invoked with an objetc with one of each: genre, artist, track', () => {
    test('Then should return a url', () => {
      const tagsAdded = {
        genres: ['hip-hop'],
        artists: [{ name: 'queen', id: '1dfeR4HaWDbWqFHLkxsg1d' }],
        tracks: [{ name: 'another one bites the dust', id: '5vdp5UmvTsnMEMESIF2Ym7' }]
      };

      const resultUrl = createUrlRecomendationsDashboard(tagsAdded);
      const url = 'https://api.spotify.com/v1/recommendations?limit=10&seed_artists=1dfeR4HaWDbWqFHLkxsg1d&seed_genres=hip-hop&seed_tracks=5vdp5UmvTsnMEMESIF2Ym7';

      expect(resultUrl).toBe(url);
    });
  });

  describe('When is invoked with tagsAdded argument', () => {
    test('Then should return an url containing &seed_artists=', () => {
      const tagsAdded = {
        genres: ['hip-hop'],
        artists: [{ name: 'queen', id: '1dfeR4HaWDbWqFHLkxsg1d' },
          { name: 'frank sinatra', id: '1Mxqyy3pSjf8kZZL4QVxS0' }],
        tracks: [{ name: 'crystalized', id: '5UBBJnFxsfjFxfrtvErQoH' },
          { name: 'another one bites the dust', id: '5vdp5UmvTsnMEMESIF2Ym7' }]
      };

      const resultUrl = createUrlRecomendationsDashboard(tagsAdded);
      const artistUrl = '&seed_artists=';
      expect(resultUrl).toEqual(expect.stringContaining(artistUrl));
    });
  });

  describe('When is invoked with tagsAdded argument', () => {
    test('Then should return an url containing &seed_genres=', () => {
      const tagsAdded = {
        genres: ['hip-hop'],
        artists: [{ name: 'queen', id: '1dfeR4HaWDbWqFHLkxsg1d' },
          { name: 'frank sinatra', id: '1Mxqyy3pSjf8kZZL4QVxS0' }],
        tracks: [{ name: 'crystalized', id: '5UBBJnFxsfjFxfrtvErQoH' },
          { name: 'another one bites the dust', id: '5vdp5UmvTsnMEMESIF2Ym7' }]
      };

      const resultUrl = createUrlRecomendationsDashboard(tagsAdded);
      //   const url = 'https://api.spotify.com/v1/recommendations?limit=10&seed_artists=1dfeR4HaWDbWqFHLkxsg1d%2C1Mxqyy3pSjf8kZZL4QVxS0&seed_genres=hip-hop&seed_tracks=5UBBJnFxsfjFxfrtvErQoH%2C5vdp5UmvTsnMEMESIF2Ym7';
      const genresUrl = '&seed_genres=';
      expect(resultUrl).toEqual(expect.stringContaining(genresUrl));
    });
  });

  describe('When is invoked with tagsAdded argument', () => {
    test('Then should return an url containing &seed_tracks=', () => {
      const tagsAdded = {
        genres: ['hip-hop'],
        artists: [{ name: 'queen', id: '1dfeR4HaWDbWqFHLkxsg1d' },
          { name: 'frank sinatra', id: '1Mxqyy3pSjf8kZZL4QVxS0' }],
        tracks: [{ name: 'crystalized', id: '5UBBJnFxsfjFxfrtvErQoH' },
          { name: 'another one bites the dust', id: '5vdp5UmvTsnMEMESIF2Ym7' }]
      };

      const resultUrl = createUrlRecomendationsDashboard(tagsAdded);
      //   const url = 'https://api.spotify.com/v1/recommendations?limit=10&seed_artists=1dfeR4HaWDbWqFHLkxsg1d%2C1Mxqyy3pSjf8kZZL4QVxS0&seed_genres=hip-hop&seed_tracks=5UBBJnFxsfjFxfrtvErQoH%2C5vdp5UmvTsnMEMESIF2Ym7';
      const tracksUrl = '&seed_tracks=';
      expect(resultUrl).toEqual(expect.stringContaining(tracksUrl));
    });
  });

  describe('When is invoked with tagsAdded argument', () => {
    test('Then should return an url containing %2C', () => {
      const tagsAdded = {
        genres: ['hip-hop'],
        artists: [{ name: 'queen', id: '1dfeR4HaWDbWqFHLkxsg1d' },
          { name: 'frank sinatra', id: '1Mxqyy3pSjf8kZZL4QVxS0' }],
        tracks: [{ name: 'crystalized', id: '5UBBJnFxsfjFxfrtvErQoH' },
          { name: 'another one bites the dust', id: '5vdp5UmvTsnMEMESIF2Ym7' }]
      };

      const resultUrl = createUrlRecomendationsDashboard(tagsAdded);
      //   const url = 'https://api.spotify.com/v1/recommendations?limit=10&seed_artists=1dfeR4HaWDbWqFHLkxsg1d%2C1Mxqyy3pSjf8kZZL4QVxS0&seed_genres=hip-hop&seed_tracks=5UBBJnFxsfjFxfrtvErQoH%2C5vdp5UmvTsnMEMESIF2Ym7';
      const joinUrl = '%2C';
      expect(resultUrl).toEqual(expect.stringContaining(joinUrl));
    });
  });
});

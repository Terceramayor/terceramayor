import dispatcher from '../dispatcher/dispatcher';
import {
  updateAlbumDetail, addTagByTrack, deleteTagByArtist, deleteTagByTrack,
  addTagByArtist, searchRecommendations, getTracks
} from './actions';

describe('Given a deleteTagByArtist function', () => {
  describe('When is invoked', () => {
    test('Then dispatcher is called', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      deleteTagByArtist();

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  describe('When is invoked with argument queen', () => {
    test('Then dispatcher is invoked with argument actionTypes.DELETE_TAG_ARTIST', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      const artist = 'queen';
      deleteTagByArtist(artist);

      expect(spy).toHaveBeenCalledWith({ data: 'queen', type: 'DELETE_TAG_ARTIST' });
      spy.mockRestore();
    });
  });
});

describe('Given a deleteTagByTrack function', () => {
  describe('When is invoked', () => {
    test('Then dispatcher is called', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      deleteTagByTrack();

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });
  describe('When is invoked with argument queen', () => {
    test('Then dispatcher is invoked with argument actionTypes.DELETE_TAG_TRACK', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      const track = 'crystalized';
      deleteTagByTrack(track);

      expect(spy).toHaveBeenCalledWith({ data: track, type: 'DELETE_TAG_TRACK' });
      spy.mockRestore();
    });
  });
});
describe('Given a addTagByTrack function', () => {
  describe('When is invoked', () => {
    test('Then dispatcher is called', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      addTagByTrack();

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  describe('When is invoked with arguments name and id', () => {
    test('Then dispatcher is invoked with argument actionTypes.ADD_TAG_TRACK and { \'Pablo\', \'I920Q1\' } as data', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      const name = 'Pablo';
      const id = 'I920Q1';
      addTagByTrack(name, id);

      expect(spy).toHaveBeenCalledWith({ data: { name, id }, type: 'ADD_TAG_TRACK' });
      spy.mockRestore();
    });
  });
});
describe('Given a addTagByArtist function', () => {
  describe('When is invoked', () => {
    test('Then dispatcher is called', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      addTagByTrack();

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });
  describe('When is invoked with argument \'tag\'', () => {
    test('Then dispatcher is invoked with argument actionTypes.ADD_TAG_ARTIST', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      const tag = 'Ennio Morricone';
      addTagByArtist(tag);

      expect(spy).toHaveBeenCalledWith({ data: tag, type: 'ADD_TAG_ARTIST' });
      spy.mockRestore();
    });
  });
});
describe('Given a getTracks function', () => {
  describe('When is invoked', () => {
    test('Then dispatcher is called', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      getTracks();

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });
});
describe('Given a searchRecommendations function', () => {
  describe('When is invoked', () => {
    test('Then dispatcher is called', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      searchRecommendations();

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });
  describe('When is invoked with argument \'urlRecomendation\'', () => {
    test('Then dispatcher is invoked with argument actionTypes.SEARCH_RECOMMENDATIONS', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      const urlRecomendation = 'http://www.google.com';
      searchRecommendations(urlRecomendation);

      expect(spy).toHaveBeenCalledWith({ data: urlRecomendation, type: 'SEARCH_RECOMMENDATIONS' });
      spy.mockRestore();
    });
  });
});
describe('Given a updateAlbumDetail function', () => {
  describe('When is invoked', () => {
    test('Then dispatcher is called', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      updateAlbumDetail();

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });
});

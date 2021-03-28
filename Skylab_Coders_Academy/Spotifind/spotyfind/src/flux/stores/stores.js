/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import EventEmitter from 'events';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher/dispatcher';

let recommendations = [];
const albumDetail = {};
let trackDetails = [];
let recommendationsSeed = [];
let artistInfo = [];
let userData = [];

let tagsAdded = {
  genres: [],
  artists: [],
  tracks: []
};

const CHANGE = 'CHANGE';
class Store extends EventEmitter {
  addEventListener(callback) {
    this.on(CHANGE, callback);
  }

  removeEventListener(callback) {
    this.removeListener(CHANGE, callback);
  }

  emitChange() {
    this.emit(CHANGE);
  }

  getRecommendations() {
    return recommendations;
  }

  getTags() {
    return tagsAdded;
  }

  getAlbumDetails() {
    return albumDetail;
  }

  getTrackDetails() {
    return trackDetails;
  }

  getRecommendationsSeed() {
    return recommendationsSeed;
  }

  getArtistInfo() {
    return artistInfo;
  }

  getUserData() {
    return userData;
  }
}

const spotifindStore = new Store();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_FIRST_TIME:
      recommendations = action.data;

      spotifindStore.emitChange();
      break;

    case actionTypes.DELETE_TAG_ARTIST:
      tagsAdded = { ...tagsAdded, artists: tagsAdded.artists.filter((artist) => artist.name !== action.data) };
      spotifindStore.emitChange();
      break;

    case actionTypes.DELETE_TAG_TRACK:
      tagsAdded = { ...tagsAdded, tracks: tagsAdded.tracks.filter((track) => track.name !== action.data) };
      spotifindStore.emitChange();
      break;

    case actionTypes.ADD_TAG_ARTIST:
      if (!tagsAdded.artists.find((artist) => artist.name === action.data.name)) {
        tagsAdded = { ...tagsAdded, artists: [...tagsAdded.artists, { name: action.data.name, id: action.data.id }] };
        spotifindStore.emitChange();
      }
      break;

    case actionTypes.ADD_TAG_TRACK:
      if (!tagsAdded.tracks.find((tracks) => tracks.name === action.data.name)) {
        tagsAdded = { ...tagsAdded, tracks: [...tagsAdded.tracks, { name: action.data.name, id: action.data.id }] };
        spotifindStore.emitChange();
      }
      break;

    case actionTypes.ADD_TO_FAVOURITES:
      artistInfo = action.data;
      spotifindStore.emitChange();
      break;

    case actionTypes.SEARCH_RECOMMENDATIONS:
      recommendationsSeed = action.data;
      spotifindStore.emitChange();
      break;

    case actionTypes.UPDATE_ALBUM_DETAIL:
      albumDetail.dashboard = action.data;
      spotifindStore.emitChange();
      break;

    case actionTypes.GET_TRACKS:
      trackDetails = action.data;
      spotifindStore.emitChange();
      break;

    case actionTypes.RETRIEVE_USER_DATA:
      userData = action.data;
      spotifindStore.emitChange();
      break;

    case actionTypes.DELETE_FAVOURITE:
      userData = action.data;
      spotifindStore.emitChange();
      break;

    case actionTypes.GET_BACK:
      recommendationsSeed = action.data;
      spotifindStore.emitChange();
      break;
    default:
      break;
  }
});

export default spotifindStore;

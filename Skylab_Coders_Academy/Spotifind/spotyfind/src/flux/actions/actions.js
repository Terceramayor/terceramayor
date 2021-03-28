/* eslint-disable max-len */
import actionTypes from './actionTypes';
import dispatcher from '../dispatcher/dispatcher';
import letsFetch from '../../fetch';

export default function loadFirstTime() {
  let recommendations;
  const offset = Math.floor(Math.random() * 25);
  letsFetch(`https://api.spotify.com/v1/browse/new-releases?limit=12&offset=${offset}`).then(
    (response) => { recommendations = [...response.data.albums.items]; }
  ).then(() => {
    dispatcher.dispatch({

      type: actionTypes.LOAD_FIRST_TIME,
      data: recommendations

    });
  });
}

export function deleteTagByArtist(tag) {
  const action = {
    type: actionTypes.DELETE_TAG_ARTIST,
    data: tag
  };
  dispatcher.dispatch(action);
}
export function deleteTagByTrack(tag) {
  const action = {
    type: actionTypes.DELETE_TAG_TRACK,
    data: tag
  };
  dispatcher.dispatch(action);
}

export function addTagByArtist(tag) {
  const action = {
    type: actionTypes.ADD_TAG_ARTIST,
    data: tag
  };
  dispatcher.dispatch(action);
}

function checkIfArtistExists(newArtistId, userFavourites) {
  let found = null;
  found = userFavourites.find((artist) => artist.id === newArtistId);
  return found;
}

export function addToFavourites(id, user) {
  let artistInfo;
  let localUser = [];

  if (window.localStorage.getItem(user)) {
    localUser = JSON.parse(window.localStorage.getItem(user));
  } else {
    window.localStorage.setItem(user, JSON.stringify(localUser));
    localUser = JSON.parse(window.localStorage.getItem(user));
  }

  if (checkIfArtistExists(id, localUser)) {
    return;
  }

  letsFetch(`https://api.spotify.com/v1/artists/${id}`)
    // eslint-disable-next-line no-console
    .then((response) => { artistInfo = response.data; })
    .then(() => {
      localUser = [...localUser, { artist: artistInfo.name, id: artistInfo.id, artistObject: artistInfo }];
    })
    .then(() => {
      window.localStorage.setItem(user, JSON.stringify(localUser));
    })
    .then(() => {
      dispatcher.dispatch({
        type: actionTypes.ADD_TO_FAVOURITES,
        data: artistInfo
      });
    });
}

export function addTagByTrack(name, id) {
  const action = {
    type: actionTypes.ADD_TAG_TRACK,
    data: { name, id }
  };
  dispatcher.dispatch(action);
}

export function updateAlbumDetail(albumInfo) {
  const action = {
    type: actionTypes.UPDATE_ALBUM_DETAIL,
    data: albumInfo

  };
  dispatcher.dispatch(action);
}

export function searchRecommendations(urlRecomendation) {
  let recommendationsSeed;

  let action = {};
  letsFetch(urlRecomendation).then((response) => { recommendationsSeed = response.data.tracks; }).then(() => {
    action = {
      type: actionTypes.SEARCH_RECOMMENDATIONS,
      data: recommendationsSeed
    };

    dispatcher.dispatch(action);
  });
}

export function retrieveUserData(name) {
  const userData = JSON.parse(localStorage.getItem(name));
  const action = {
    type: actionTypes.RETRIEVE_USER_DATA,
    data: userData
  };
  dispatcher.dispatch(action);
}

export function deleteFavourite(index, name) {
  const userData = JSON.parse(window.localStorage.getItem(name));
  userData.splice(index, 1);
  window.localStorage.setItem(name, JSON.stringify(userData));

  const action = {
    type: actionTypes.DELETE_FAVOURITE,
    data: userData
  };
  dispatcher.dispatch(action);
}
export async function getTracks(albumId) {
  let arrTracks = [];
  const urlAlbum = `https://api.spotify.com/v1/albums/${albumId.id}`;
  await letsFetch(urlAlbum)
    .then((response) => { arrTracks = [...response.data.tracks.items]; })
    .then(() => {
      dispatcher.dispatch({
        type: actionTypes.GET_TRACKS,
        data: arrTracks
      });
    });
}
export function getBackToDashboard(dashboardOld) {
  const { dashboard } = dashboardOld;
  const { getBackData } = dashboard;
  const action = {
    type: actionTypes.GET_BACK,
    data: getBackData
  };
  dispatcher.dispatch(action);
}

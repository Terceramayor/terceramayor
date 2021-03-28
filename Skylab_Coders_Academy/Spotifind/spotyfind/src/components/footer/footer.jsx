import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import {
  deleteTagByArtist, deleteTagByTrack, searchRecommendations
} from '../../flux/actions/actions';
import spotifindStore from '../../flux/stores/stores';
import createUrlRecomendationsDashboard from './url-from-tags';

export default function Footer() {
  const [tagsAdded, setTagsAdded] = useState(spotifindStore.getTags());

  function onChange() {
    setTagsAdded(spotifindStore.getTags());
  }

  useEffect(() => {
    spotifindStore.addEventListener(onChange);
    return () => {
      spotifindStore.removeEventListener(onChange);
    };
  }, [tagsAdded]);

  return (
    <footer className="root__search-params">
      <div className="search-params__queries">
        <div className="queries__artists">
          <span>Artists:</span>
          {
          tagsAdded.artists.map((artist) => (

            <button key={artist.id} type="button" className="tag__button" onClick={() => deleteTagByArtist(artist.name)}>
              {artist.name}
              <i className="fas fa-times-circle" />
            </button>
          ))
            }
        </div>
        <div className="queries__tracks">
          <span>Tracks:</span>
          {
          tagsAdded.tracks.map((track) => (
            <button key={track.id} type="button" className="tag__button" onClick={() => deleteTagByTrack(track.name)}>
              {track.name}
              <i className="fas fa-times-circle" />
            </button>
          ))
            }
        </div>
      </div>
      <div className="search-params__button">
        <Link to="/dashboard/returnRecommendationsSeed" className="search-button" onClick={() => searchRecommendations(createUrlRecomendationsDashboard(tagsAdded))}>SEARCH</Link>
      </div>
    </footer>
  );
}

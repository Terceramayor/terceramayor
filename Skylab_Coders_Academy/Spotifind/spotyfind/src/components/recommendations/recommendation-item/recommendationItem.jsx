import React from 'react';
import '../recommendations.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTracks, updateAlbumDetail } from '../../../flux/actions/actions';

export default function RecommendationItem({ currentRecommendation }) {
  // eslint-disable-next-line max-len
  RecommendationItem.prototype.recommendationDetail = (image, albumName, releaseDate, artists, id) => {
    const albumInfoWrapper = {

      image,
      albumName,
      releaseDate,
      artists,
      id
    };
    getTracks({ id });
    updateAlbumDetail(albumInfoWrapper);
  };

  return (

    <div className="recommendations__item">
      <Link to="/album-detail">
        <button
          className="item__buttom"
          type="button"
          onClick={() => {
            RecommendationItem.prototype.recommendationDetail(currentRecommendation.images[1].url,
              currentRecommendation.name,
              currentRecommendation.release_date,
              currentRecommendation.artists,
              currentRecommendation.id);
          }}
        >
          <img className="item__image" src={currentRecommendation.images[1].url} alt={currentRecommendation.name} />
        </button>
      </Link>
      <div className="item__album">
        <div className="album__artist-year" />
        <h5 className="artist-year__artist">{currentRecommendation.name}</h5>
        <div>
          {currentRecommendation?.artists.map((artist) => (

            <li key={artist.name} className="artists-list">
              {artist.name}
            </li>

          ))}

        </div>
        <h6 className="artist-year__year">{currentRecommendation.release_date}</h6>

      </div>
    </div>

  );
}

RecommendationItem.propTypes = {
  currentRecommendation: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string
    })),
    name: PropTypes.string,
    release_date: PropTypes.string,
    artists: PropTypes.arrayOf(PropTypes.shape({})),
    id: PropTypes.string
  }).isRequired
};

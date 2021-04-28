import PropTypes from 'prop-types';
import React from 'react';
import '../recommendations.scss';
import { Link } from 'react-router-dom';
import { updateAlbumDetail, getTracks } from '../../../flux/actions/actions';

export default function RecommendationItemSeed({ currentRecommendation, getBackData }) {
  RecommendationItemSeed.prototype.recommendationDetailSeed = (
    image, albumName, releaseDate, artists, id
  ) => {
    const albumInfoWrapper = {

      image,
      albumName,
      releaseDate,
      artists,
      getBackData,
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
            RecommendationItemSeed.prototype.recommendationDetailSeed(
              currentRecommendation.album.images[1].url,
              currentRecommendation.album.name,
              currentRecommendation.album.release_date,
              currentRecommendation.album.artists,
              currentRecommendation.id
            );
          }}
        >
          <img className="item__image" src={currentRecommendation.album.images[1].url} alt={currentRecommendation.album.name} />
        </button>
      </Link>
      <div className="item__album">
        <div className="album__artist-year" />
        <h5 className="artist-year__artist">{currentRecommendation.album.name}</h5>
        <div>
          {currentRecommendation?.album.artists.map((artist) => (

            <li key={artist.name} className="artists-list">
              {artist.name}
            </li>

          ))}

        </div>
        <h6 className="artist-year__year">{currentRecommendation.album.release_date}</h6>
        <div className="album__favourite" />
      </div>
    </div>

  );
}

RecommendationItemSeed.propTypes = {
  currentRecommendation: PropTypes.shape({
    id: PropTypes.string,
    album: PropTypes.shape({
      name: PropTypes.string,
      release_date: PropTypes.string,
      artists: PropTypes.arrayOf(PropTypes.shape({})),
      images: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string
      }))
    })
  }).isRequired,
  getBackData: PropTypes.shape([{}]).isRequired
};

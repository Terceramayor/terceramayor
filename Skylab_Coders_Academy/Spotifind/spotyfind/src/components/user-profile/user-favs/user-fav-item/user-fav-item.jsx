import React from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { deleteFavourite } from '../../../../flux/actions/actions';
import './user-fav-item.scss';

export default function UserFavsItem({ favouriteItem, possition }) {
  const { user: { name } } = useAuth0();
  return (
    <div className="card-artist-item">

      <div className="card-artist-item__details">
        <img className="item__image__fav" src={favouriteItem.artistObject.images[1].url} alt={favouriteItem.artistObject.name} />
        <div className="artist__info">
          <span className="artist__name">{favouriteItem.artistObject.name}</span>
          <span className="artist__genres">
            Genres:
            {' '}
            {favouriteItem.artistObject.genres}
          </span>
          <span className="artist__info-popularity">
            Followers:
            {' '}
            {favouriteItem.artistObject.followers.total}
          </span>
          <span className="artist__info-popularity">
            Popularity:
            {' '}
            {favouriteItem.artistObject.popularity}
          </span>
        </div>
      </div>
      <div className="card-artist-item__buttons">
        <button type="button" aria-label="delete" onClick={() => deleteFavourite(possition, name)}><i className="far fa-times-circle" /></button>
      </div>
    </div>
  );
}

UserFavsItem.propTypes = {
  favouriteItem: PropTypes.shape({
    artist: PropTypes.string,
    artistObject: PropTypes.shape({
      images: PropTypes.string,
      name: PropTypes.string,
      genres: PropTypes.string,
      followers: PropTypes.shape({
        total: PropTypes.number
      }),
      popularity: PropTypes.string
    })
  }).isRequired,
  possition: PropTypes.number.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';
import './user-summary.scss';
import { useAuth0 } from '@auth0/auth0-react';

function getAveraGePopularity(artistArray) {
  const totalPopularity = artistArray.reduce(
    (average, currentArtist) => (average + currentArtist.artistObject.popularity), 0
  );
  return totalPopularity / artistArray.length;
}
function getListOfGenres(userData) {
  const totalGenresArray = [];

  userData.map(
    ({ artistObject: { genres } }) => genres.map((genre) => totalGenresArray.push(genre))
  );
  const genresArray = [];
  totalGenresArray.map((genre) => {
    if (genresArray.includes(genre)) {
      return genresArray;
    }
    return genresArray.push(genre);
  });

  return genresArray;
}

function getListOfArtists(userData) {
  const artistsArray = userData.map(({ artist }) => artist);
  return artistsArray;
}

export default function UserSummary({ userData }) {
  const { user: { name } } = useAuth0();
  return (
    <section className="user-profile__summary">
      <h5 className="summary__user-name">
        Welcome
        {'  '}
        {name}
      </h5>
      <ul className="summary__user-stats">
        <div>
          {' '}
          <div className="user-stats__title">
            <p>Your favourites artists:</p>
          </div>
          <li className="user-stats__genres">
            {getListOfArtists(userData).map((artist) => (
              <span>
                {artist}
                {', '}
              </span>
            ))}
          </li>
        </div>
        <div>
          <div className="user-stats__title">
            <p>Your favourites genres:</p>
          </div>
          <li className="user-stats__artists">
            {getListOfGenres(userData).map((genre) => (
              <span>
                {genre}
                {', '}
              </span>
            ))}
          </li>
        </div>
        <div>
          <div className="user-stats__title">
            <p> Amount of favourites:</p>
          </div>
          <li className="user-stats__num-fav">
            <span>{userData.length}</span>
          </li>
          <div className="user-stats__title">
            <p>List average popularity:</p>
          </div>
          <li className="user-stats__avg-pop">
            <span>{getAveraGePopularity(userData)}</span>
          </li>
        </div>
      </ul>
    </section>
  );
}

UserSummary.propTypes = {
  userData: PropTypes.shape([{
    artist: PropTypes.string,
    id: PropTypes.string
  }]).isRequired
};

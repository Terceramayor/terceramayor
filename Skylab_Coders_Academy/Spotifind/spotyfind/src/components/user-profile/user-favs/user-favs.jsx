import React from 'react';
import PropTypes from 'prop-types';
import UserFavsItem from './user-fav-item/user-fav-item';
import './user-favs.scss';

export default function UserFavs({ userData }) {
  return (
    <section className="user-profile__favourites">
      <h3 className="favourites__title">Favourites:</h3>
      <div className="favourites__container">

        {userData.map((favouriteItem, possition) => (
          <UserFavsItem
            favouriteItem={favouriteItem}
            possition={possition}

          />
        ))}

      </div>
    </section>
  );
}

UserFavs.propTypes = {
  userData: PropTypes.shape([{
    artist: PropTypes.string,
    artistObject: PropTypes.shape({}),
    id: PropTypes.string
  }]).isRequired
};

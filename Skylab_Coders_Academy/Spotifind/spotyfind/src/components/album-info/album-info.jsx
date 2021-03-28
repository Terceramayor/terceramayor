/* eslint-disable max-len */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import spotifindStore from '../../flux/stores/stores';
import { addTagByArtist, addToFavourites, getBackToDashboard } from '../../flux/actions/actions';
import './album-info.scss';

export default function AlbumInfo() {
  const [albumDetails, setAlbumDetails] = useState(spotifindStore.getAlbumDetails());

  function onChanges() {
    setAlbumDetails(spotifindStore.getAlbumDetails());
  }

  useEffect(() => {
    spotifindStore.addEventListener(onChanges);

    return () => {
      spotifindStore.removeEventListener(onChanges);
    };
  }, [albumDetails]);

  const { user } = useAuth0();
  const userName = user.name;

  return (
    <>
      <section className="detail__album-info">

        <div className="album-info__backbutton">
          <Link to="/dashboard/returnRecommendationsSeed" className="back-button" onClick={() => getBackToDashboard(albumDetails)}>BACK TO DASHBOARD</Link>
        </div>

        <div className="album-info__album-cover">
          <img src={albumDetails.dashboard?.image} alt={albumDetails.dashboard?.albumName} />
          <div className="album-cover__info">
            <span className="album-cover__info-title">{albumDetails.dashboard?.albumName}</span>
            <span className="album-cover__info-date">{albumDetails.dashboard?.releaseDate}</span>
          </div>
        </div>
        <div className="album-info__artist">
          <div className="artist__names">
            {
            albumDetails.dashboard?.artists.map((artist) => (
              <>
                <button type="button" onClick={() => addTagByArtist({ name: artist.name, id: artist.id })}>{artist.name}</button>
                <button aria-label="artist" type="button" onClick={() => addToFavourites(artist.id, userName)}><i className="far fa-heart" /></button>
              </>
            ))
        }
          </div>
          <div className="artist__genres">
            <span />
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import SingleTrack from './trackClass';
import spotifindStore from '../../flux/stores/stores';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tracks.scss';

export default function TrackItem() {
  const [trackDetails, setTrackDetails] = useState(spotifindStore.getTrackDetails());

  function onChanges() {
    setTrackDetails(spotifindStore.getTrackDetails());
  }

  useEffect(() => {
    spotifindStore.addEventListener(onChanges);

    return () => {
      spotifindStore.removeEventListener(onChanges);
    };
  }, [trackDetails]);

  return (
    <section className="detail__tracks">
      <h3 className="tracks__title">Tracks:</h3>
      <div className="tracks__list">
        {trackDetails?.map((oneTrack) => (
          <SingleTrack obj={oneTrack} />
        ))}
      </div>
    </section>
  );
}

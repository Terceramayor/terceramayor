/* eslint-disable max-len */
import React from 'react';
import './welcome-info.scss';

export default function WelcomeInfo() {
  return (
    <div className="container-info__info">
      <div className="container__video">
        <video autoPlay muted loop id="video" src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/602111fd2488b26fb6d8725b/8b37d06dd2543af7bdb472fe162fe332/production_ID_4380097.mp4" />
      </div>
      {/* <iframe allow="autoplay; encrypted-media" title="Welcome" className="js-photo-page-video-iframe" frameBorder="0" mozallowfullscreen="0" webkitallowfullscreen="0" src="//player.vimeo.com/video/417351702?autoplay=1" /> */}
      <div className="welcome__info">
        <h1>Welcome to Spotifind</h1>
        <h3>Discover new music based on the almighty Spotify Algorithm</h3>
        <div className="welcome__info__usage">
          <p>Usage goes as it follows:</p>
          <p>
            <i className="fas fa-plus" />
            Discover new releases on the home page
          </p>
          <p>
            <i className="fas fa-plus" />
            Go to the album and play the preview of the tracks
          </p>
          <p>
            <i className="fas fa-plus" />
            Add artist and tracks to the search tab to get more accurate recommendations
            {' '}
          </p>
          <p>
            <i className="fas fa-plus" />
            Like to save your favourite artists
          </p>
        </div>
        {/* <p>* You will get a few starting recommendations from which we will need your unvaluable input.</p>
        <p>* You may retrieve any album detail in order to listen to a preview of its tracks.</p>
        <p>* In order to be able to search for more specific recommendations, previous step is required.</p>
        <p>* At any given time, you may mark an artist as favourite and see a detailed summary in your profile.</p>
        */}
      </div>
    </div>
  );
}

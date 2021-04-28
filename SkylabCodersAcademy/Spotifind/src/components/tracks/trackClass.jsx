/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';
import { addTagByTrack } from '../../flux/actions/actions';

import './trackClass.scss';

class SingleTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
      clicked: false
    };
    this.id = this.props.obj.id;
    this.number = this.props.obj.track_number;
    this.name = this.props.obj.name;
    if (this.props.obj.preview_url === null) {
      this.address = 'http://soundfxcenter.com/video-games/starcraft/8d82b5_Battlecruiser_Receiving_Transmission_Sound_Effect.mp3';
    } else {
      this.address = this.props.obj.preview_url;
    }
    this.audio = new Audio(this.address);
  }

  componentWillUnmount() {
    this.audio.pause();
  }

  play() {
    this.setState((change) => ({
      play: !change.play,
      pause: !change.pause
    }));
    this.audio.volume = 0.2;
    this.audio.play();
  }

  pause() {
    this.setState((change) => ({
      play: !change.play,
      pause: !change.pause
    }));
    this.audio.pause();
  }

  clicked() {
    this.setState((change) => ({
      clicked: !change.clicked
    }));
  }

  render() {
    return (
      <>
        {this.state.clicked && (
          addTagByTrack(this.name, this.id)
        )}
        <li className="list__single">
          <span className="single__id">{this.number}</span>
          <span className="single__name" role="button" tabIndex="0" onClick={() => this.clicked()} onKeyDown={() => this.clicked()}>{this.name}</span>
          <div className="single__buttons">
            {!this.state.play
            && (
            <i
              role="button"
              aria-label="Play"
              className="far fa-play-circle"
              tabIndex="0"
              onClick={() => this.play()}
              onKeyDown={() => this.play()}
            />
            )}
            {!this.state.pause && (
              <i
                role="button"
                aria-label="Pause"
                className="far fa-pause-circle"
                tabIndex="0"
                onClick={() => this.pause()}
                onKeyDown={() => this.pause()}
              />
            )}
          </div>
        </li>
      </>
    );
  }
}

SingleTrack.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.string,
    track_number: PropTypes.number,
    name: PropTypes.string,
    preview_url: PropTypes.string
  }).isRequired
};

export default SingleTrack;

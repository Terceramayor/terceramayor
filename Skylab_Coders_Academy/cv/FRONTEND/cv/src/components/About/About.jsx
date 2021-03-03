/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import './about.scss';
import emailIcon from '../../assets/icons/email.png';
import locationIcon from '../../assets/icons/buildings.png';
// import helloIcon from '../../assets/icons/hello.png';

export default function About({ about, className }) {
  return (
    <section className={className}>

      <div className="about__container" id="aboutScroll">

        <img className="profile__image" src={about.photoURL} alt="pablo" />
        <h2 className="about__content">{about.name}</h2>
        <div className="about__info__container">
          <h3 className="about__content">{about.role}</h3>
        </div>

        <div className="about__info__container">
          <img src={emailIcon} className="icon" alt="email" />
          <span className="about__content">{about.email}</span>
        </div>

        <div className="about__info__container">
          <img src={locationIcon} className="icon" alt="location" />
          <span className="about__content">{about.location}</span>
        </div>

        <div className="about__info__container">
          <span className="about__content__presentation">{about.presentation}</span>
        </div>

      </div>
    </section>
  );
}

About.propTypes = {
  about: PropTypes.shape({

    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    presentation: PropTypes.string.isRequired

  }).isRequired

};

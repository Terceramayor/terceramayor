import React from 'react';
import { PropTypes } from 'prop-types';
import './educationItem.scss';
import academy from '../../assets/icons/academy.png';
import city from '../../assets/icons/buildings.png';
import time from '../../assets/icons/time.png';

export default function EducationItem({ educationPeriod, index }) {
  const educationContainerClass = (index % 2 === 0) ? 'education__container flex-end' : 'education__container flex-start';
  const educationDataAos = (index % 2 === 0) ? 'fade-left' : 'fade-right';

  return (

    <section data-aos={educationDataAos} className={educationContainerClass}>

      <h3 className="education__item--margins education__item--alignSelfCenter">{educationPeriod.title}</h3>

      <img src={educationPeriod.academylogo} className="academy__logo education__item--margins education__item--alignSelfCenter" alt="Logo" />
      <div className="pair__icon__content">
        <img src={academy} className="icon education__item--margins education__item--alignSelfCenter" alt="Logo" />
        <span className="education__item--margins">{educationPeriod.academy}</span>
      </div>

      <div className="pair__icon__content">
        <img src={city} className="icon education__item--margins education__item--alignSelfCenter" alt="Logo" />
        <span className="education__item--margins">{educationPeriod.location}</span>
      </div>

      <div className="pair__icon__content">
        <img src={time} className="icon education__item--margins education__item--alignSelfCenter" alt="Logo" />
        <span className="education__item--margins">
          {educationPeriod.completionYear}

        </span>

      </div>

    </section>

  );
}

EducationItem.propTypes = {
  educationPeriod: PropTypes.shape({

    title: PropTypes.string.isRequired,
    academylogo: PropTypes.string.isRequired,
    academy: PropTypes.string.isRequired,
    completionYear: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired

  }).isRequired,

  index: PropTypes.number.isRequired

};

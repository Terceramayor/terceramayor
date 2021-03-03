import React from 'react';
import { PropTypes } from 'prop-types';
import './experience.scss';
import '../../assets/circularProgress/circle.scss';
import company from '../../assets/icons/bank.png';
import flag from '../../assets/icons/bandera.png';
import time from '../../assets/icons/time.png';
import description from '../../assets/icons/description.png';

export default function Experience({ experience, index }) {
  const experienceContainerClass = (index % 2 === 0) ? 'experience__container flex-end' : 'experience__container flex-start';
  const experienceDataAos = (index % 2 === 0) ? 'fade-left' : 'fade-right';
  const yearS = (experience.duration > 1) ? 'Years' : 'Year';
  return (

    <section data-aos={experienceDataAos} className={experienceContainerClass}>

      <h3 className="exprience__item--margins exprience__item--alignSelfCenter">{experience.role}</h3>

      <img src={experience.companyLogo} className="company__logo exprience__item--margins exprience__item--alignSelfCenter" alt="Logo" />
      <div className="pair__icon__content">
        <img src={company} className="icon exprience__item--margins exprience__item--alignSelfCenter" alt="Logo" />
        <span className="exprience__item--margins">{experience.company}</span>
      </div>

      <div className="pair__icon__content">
        <img src={flag} className="icon exprience__item--margins exprience__item--alignSelfCenter" alt="Logo" />
        <span className="exprience__item--margins">{experience.location}</span>
      </div>

      <div className="pair__icon__content">
        <img src={time} className="icon exprience__item--margins exprience__item--alignSelfCenter" alt="Logo" />
        <span className="exprience__item--margins">
          {experience.duration}
          {' '}
          {yearS}
        </span>
        <span className="exprience__item--margins">
          {experience.endYear}

        </span>
      </div>

      <div className="pair__icon__content">
        <img src={description} className="icon exprience__item--margins exprience__item--alignSelfCenter" alt="Logo" />
        <span className="exprience__item--margins exprience__item--alignLeft">{experience.description}</span>
      </div>

    </section>

  );
}

Experience.propTypes = {
  experience: PropTypes.shape({

    score: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    endYear: PropTypes.number.isRequired

  }).isRequired,

  index: PropTypes.number.isRequired

};

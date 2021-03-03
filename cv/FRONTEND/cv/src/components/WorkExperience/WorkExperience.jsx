import React from 'react';
import { PropTypes } from 'prop-types';
import './workExperience.scss';
import Experience from '../Experience/Experience';
// import emailIcon from '../../assets/icons/email.png';
// import locationIcon from '../../assets/icons/buildings.png';
// import helloIcon from '../../assets/icons/hello.png';

export default function ProfesionalExperience({ profesionalExperience, className }) {
  return (
    <section className={className} id="workExperienCeSection">

      <div id="workExperienceScroll" className="working__experience__container">

        <h2 className="title--paddings">Experience</h2>

        <div className="experience">

          {profesionalExperience.map(
            (experience, index) => <Experience experience={experience} index={index} />
          )}

        </div>

      </div>
    </section>
  );
}

ProfesionalExperience.propTypes = {
  profesionalExperience: PropTypes.arrayOf(PropTypes.shape({ })).isRequired,

  className: PropTypes.string.isRequired

};

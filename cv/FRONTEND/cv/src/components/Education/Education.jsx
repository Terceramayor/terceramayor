import React from 'react';
import { PropTypes } from 'prop-types';
import './education.scss';
import EducationItem from '../EducationItem/EducationItem';

export default function Education({ education, className }) {
  return (
    <section className={className} id="educationCeSection">

      <div className="education__all__items__container" id="educationScroll">

        <h2 className="education--paddings">Education</h2>

        <div className="education">

          {education.map(
            (educationPeriod, index) => (
              <EducationItem
                educationPeriod={educationPeriod}
                index={index}
              />
            )
          )}

        </div>

      </div>
    </section>
  );
}

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape({ })).isRequired,

  className: PropTypes.string.isRequired

};

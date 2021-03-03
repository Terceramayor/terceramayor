import React from 'react';
import { PropTypes } from 'prop-types';
import './skillItem.scss';
import '../../assets/circularProgress/circle.scss';

export default function SkillItem({ skill }) {
  const progressCircleClass = `c100 p${skill.score} small`;
  return (

    <section className="professional_skill" data-aos="zoom-in-up">

      <div className="progress__circle">

        <div className={progressCircleClass}>
          <span>{skill.score}</span>
          <div className="slice">
            <div className="bar" />
            <div className="fill" />
          </div>
        </div>

      </div>
      {(skill.flag) ? (
        <img className="country__flag" src={skill.flag} alt={skill.skill} />
      ) : (<span />)}

      <span>{skill.skill}</span>

    </section>

  );
}

SkillItem.propTypes = {
  skill: PropTypes.shape({

    score: PropTypes.number.isRequired,
    flag: PropTypes.string,
    skill: PropTypes.string.isRequired

  }).isRequired

};

import React from 'react';
import { PropTypes } from 'prop-types';
import './skills.scss';
import SkillItem from '../SkillItem/SkillItem';
// import emailIcon from '../../assets/icons/email.png';
// import locationIcon from '../../assets/icons/buildings.png';
// import helloIcon from '../../assets/icons/hello.png';

export default function Skills({ skills, className }) {
  skills.profesional.sort((a, b) => a.priority - b.priority);
  skills.personal.sort((a, b) => a.priority - b.priority);
  skills.languages.sort((a, b) => a.priority - b.priority);

  return (
    <section className={className} id="skillsSection">

      <div className="skills__container" id="skillsScroll">

        <h2>Hard Skills</h2>

        <div className="profesional__skills">

          {skills.profesional.map((skill) => <SkillItem skill={skill} />)}

        </div>

        <h2>Soft Skills</h2>

        <div className="personal__skills">

          {skills.personal.map((skill) => <SkillItem skill={skill} />)}

        </div>

        <h2>Languages</h2>

        <div className="languages">

          {skills.languages.map((skill) => <SkillItem skill={skill} />)}

        </div>

      </div>
    </section>
  );
}

Skills.propTypes = {
  skills: PropTypes.shape({

    profesional: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    personal: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    languages: PropTypes.arrayOf(PropTypes.shape({})).isRequired

  }).isRequired,

  className: PropTypes.string.isRequired

};

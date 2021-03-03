/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Skills from './Skills/Skills';
import WorkExperience from './WorkExperience/WorkExperience';
import Portfolio from './Portfolio/Portfolio';
import Education from './Education/Education';

import loadCurriculumData from '../redux/actions/actions';
import cvStyles from './cv.module.scss';

function Cv({ curriculum, actions }) {
  useEffect(() => {
    actions.loadCurriculumData();
  }, []);

  if (curriculum.length === 0) {
    return (

      <div>Loading page...</div>

    );
  }
  const [cv] = curriculum;
  const {
    about, skills, profesionalExperience, portfolio, education
  } = cv;

  return (
    <div className={cvStyles.curriculum__container}>

      <Navigation />

      <About about={about} className={cvStyles.sectionContainerMargins} />
      <Skills skills={skills} className={cvStyles.sectionContainerMargins} />
      <WorkExperience
        profesionalExperience={profesionalExperience}
        className={cvStyles.sectionContainerMargins}
      />
      <Portfolio portfolio={portfolio} className={cvStyles.sectionContainerMargins} />
      <Education education={education} className={cvStyles.sectionContainerMargins} />

    </div>
  );
}

Cv.propTypes = {
  curriculum: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  actions: PropTypes.shape({ loadCurriculumData: PropTypes.func.isRequired }).isRequired

};

function mapStateToProps(state) {
  return {
    curriculum: state.curriculum
  };
}

const mapDispatchToProps = (dispatch) => ({

  actions: bindActionCreators({ loadCurriculumData }, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(Cv);

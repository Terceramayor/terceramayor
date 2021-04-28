import React from 'react';
import PropTypes from 'prop-types';
import Recommendations from '../recommendations/recommendations';
import RecommendationsSeeds from '../recommendations-seed/recommendations-seed';
import WelcomeInfo from '../welcome-info/welcome-info';
import stringsCompilation from '../../notMagicStrings';

export default function Dashboard({ status }) {
  if (status === stringsCompilation.INITIAL_RECOMMENDATIONS) {
    return (
      <>
        <WelcomeInfo />
        <Recommendations />
      </>
    );
  } return <RecommendationsSeeds />;
}

Dashboard.propTypes = {
  status: PropTypes.string.isRequired
};

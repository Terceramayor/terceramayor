import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadPortfolio } from '../../redux/actions/actions';

import './portfolioNavigation.scss';

function portfolioNavigation({ actions }) {
  return (

    <section className="portfolio__navigation__bar">

      <button type="button" onClick={() => { actions.loadPortfolio('profesional'); }} className="navigation__button">Profesional</button>
      <button type="button" onClick={() => { actions.loadPortfolio('asStudent'); }} className="navigation__button">As Student</button>
      <button type="button" onClick={() => { actions.loadPortfolio('personal'); }} className="navigation__button">Personal</button>

    </section>

  );
}

const mapDispatchToProps = (dispatch) => ({

  actions: bindActionCreators({ loadPortfolio }, dispatch)

});

export default connect(null, mapDispatchToProps)(portfolioNavigation);

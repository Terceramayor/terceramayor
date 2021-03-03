import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import PortfolioNavigation from '../portfolioNavigation/PortfolioNavigation';
import PortfolioItem from '../portfolioItem/PortfolioItem';
import './portfolio.scss';

function Portfolio({ portfolio, className, portfolioToRender }) {
  return (
    <section className={className} id="posrtfolioSection">

      <div className="portfolio__all__items__container" id="portfolioScroll">

        <h2 className="portfolio--formating">Portfolio</h2>

        <PortfolioNavigation />

        {(portfolioToRender !== '' && portfolio[portfolioToRender][0].name) ? (

          <div className="portfolio__container">

            {portfolio[portfolioToRender].map(
              (itemPortfolio) => (
                <div className="portfolio__item" data-aos="flip-up">
                  <PortfolioItem itemPortfolio={itemPortfolio} />
                </div>
              )
            )}

          </div>
        ) : (
          <span className="portfolio--formating">Which portfolio to dive in?</span>

        )}

      </div>
    </section>
  );
}

Portfolio.propTypes = {
  portfolio: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
  portfolioToRender: PropTypes.string.isRequired

};

function mapStateToProps(state) {
  return {
    portfolioToRender: state.portfolioToRender
  };
}

// const mapDispatchToProps = (dispatch) => ({

//   actions: bindActionCreators({ loadCurriculumData }, dispatch)

// });

export default connect(mapStateToProps, null)(Portfolio);

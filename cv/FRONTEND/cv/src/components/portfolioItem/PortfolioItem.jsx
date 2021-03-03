import React from 'react';
// eslint-disable-next-line no-unused-vars
import { PropTypes } from 'prop-types';
import gitHub from '../../assets/icons/gitHub.png';

import './portfolioItem.scss';

// eslint-disable-next-line no-unused-vars
export default function portfolioItem({ itemPortfolio }) {
  return (

    <>
      <h3 className="portfolio__item--margins">{itemPortfolio.name}</h3>
      <img src={itemPortfolio.imageURL} className="project__picture portfolio__item--margins" alt="portfolio" />
      <span className="portfolio__item--margins">{itemPortfolio.description}</span>

      <div className="github__block portfolio__item--margins">
        <img src={gitHub} className="github__icon" alt="github" />
        <a href={itemPortfolio.gitHubURL} target="_blank" rel="noreferrer" className="gitHub__link_text">GitHub link</a>
      </div>
    </>

  );
}

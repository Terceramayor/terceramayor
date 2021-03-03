import React from 'react';
import { Link } from 'react-scroll';
import './navigation.scss';

export default function navigation() {
  return (

    <section className="navigation__bar">

      <Link
        className="navigation__button_scroll"
        activeClass="navigation__button_active"
        to="aboutScroll"
        spy
        smooth
        offset={-150}
        duration={1000}
      >
        About
      </Link>

      <Link
        className="navigation__button_scroll"
        activeClass="navigation__button_active"
        to="skillsScroll"
        spy
        smooth
        offset={-70}
        duration={1000}
      >
        Skills

      </Link>

      <Link
        className="navigation__button_scroll"
        activeClass="navigation__button_active"
        to="workExperienceScroll"
        spy
        smooth
        offset={-70}
        duration={1000}
      >
        Experience

      </Link>

      <Link
        className="navigation__button_scroll"
        activeClass="navigation__button_active"
        to="portfolioScroll"
        spy
        smooth
        offset={-70}
        duration={1000}
      >
        Portfolio

      </Link>

      <Link
        className="navigation__button_scroll"
        activeClass="navigation__button_active"
        to="educationScroll"
        spy
        smooth
        offset={-70}
        duration={1000}
      >
        Education

      </Link>

    </section>

  );
}

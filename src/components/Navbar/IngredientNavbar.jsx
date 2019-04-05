import React from 'react';
import { Heading, Hero } from 'react-bulma-components/full';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import IngredientsCollector from '../IngredientsCollector/IngredientsCollector';

const IngredientNavbar = ({ chHandle }) => (
  <div className="background-navbar-image">
    <div className="page-shadow">
      <Hero>
        <Hero.Body style={{ paddingBottom: '1%', paddingTop: '2%' }}>
          <div className="row" style={{ marginBottom: '1%' }}>
            <div style={{ marginRight: '2%' }}>
              <Heading size={1} className="white">LeftOver</Heading>
              <Heading subtitle size={4} className="white">
                {"Nobody's goning to be leftover"}
              </Heading>
            </div>
            <div className="flex-1">
              <IngredientsCollector />
            </div>
          </div>
          <SearchBar holder="Search ingredient..." changeHandler={chHandle} />
        </Hero.Body>
      </Hero>
    </div>
  </div>
);

IngredientNavbar.propTypes = {
  chHandle: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.string)).isRequired,
};

export default IngredientNavbar;

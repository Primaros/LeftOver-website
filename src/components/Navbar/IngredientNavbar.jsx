import React from 'react';
import { Heading, Hero } from 'react-bulma-components/full';
import IngredientsCollector from '../IngredientsCollector/IngredientsCollector';

const IngredientNavbar = () => (
  <div className="background-navbar-image">
    <div className="page-shadow">
      <Hero style={{ margin: 0, padding: 0 }}>
        <Hero.Body style={{ paddingBottom: '1%', paddingTop: '2%', marginBottom: '1%' }}>
          <div className="row">
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
        </Hero.Body>
      </Hero>
    </div>
  </div>
);

export default IngredientNavbar;

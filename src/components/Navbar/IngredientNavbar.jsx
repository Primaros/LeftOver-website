import React from 'react';
import { Heading, Hero } from 'react-bulma-components/full';

const IngredientNavbar = () => (
  <div className="background-navbar-image">
    <div className="page-shadow">
      <Hero>
        <Hero.Body>
          <div>
            <Heading size={1} className="white">LeftOver</Heading>
            <Heading subtitle size={4} className="white">
              {"Nobody's goning to be leftover"}
            </Heading>
          </div>
        </Hero.Body>
      </Hero>
    </div>
  </div>
);

export default IngredientNavbar;

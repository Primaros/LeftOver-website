import React from 'react';
import { Heading, Hero } from 'react-bulma-components/full';

const IngredientNavbar = () => (
  <div className="background-navbar-image rounded">
    <div className="page-shadow rounded-top">
      <Hero style={{ margin: 0, padding: 0, width: '100%' }}>
        <Hero.Body style={{ paddingBottom: '1%', paddingTop: '2%', marginBottom: '1%' }}>
          <div className="row">
            <div style={{ marginRight: '2%' }}>
              <Heading size={1} className="navbar-title">LeftOver</Heading>
              <Heading subtitle size={4} className="navbar-subtitle">
                {'Delighting quick, efficient maniacs'}
              </Heading>
            </div>
          </div>
        </Hero.Body>
      </Hero>
    </div>
  </div>
);

export default IngredientNavbar;

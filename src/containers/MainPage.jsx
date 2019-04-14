import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import IngredientNavbar from '../components/Navbar/IngredientNavbar';
import IngredientsCollector from '../components/IngredientsCollector/IngredientsCollector';
import IngredientsPage from './Ingredients/IngredientsPage';
import ReceipsPage from './Receips/ReceipsPage';
import DishPage from './Dish/DishPage';
import CodeError from './errors/CodeError';

const renderRedirect = () => (
  <Redirect to="/pagenotfound" />
);

const MainPage = () => (
  <div className="page">
    <IngredientNavbar />
    <div className="row" style={{ height: '100%' }}>
      <IngredientsCollector />
      <div className="page-content" style={{ flex: 4 }}>
        <Switch>
          <Route path="/leftover/ingredients" component={IngredientsPage} />
          <Route path="/leftover/receips" component={ReceipsPage} />
          <Route path="/leftover/dish/:name" component={DishPage} />
          <Route path="/coderror" component={CodeError} />
          <Route component={renderRedirect} />
        </Switch>
      </div>
    </div>
  </div>
);

MainPage.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
};

export default MainPage;

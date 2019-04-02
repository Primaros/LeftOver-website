import React from 'react';
import {
  Router,
  Route,
} from 'react-router-dom';
import Landing from './containers/Landing/Landing';
import history from './utils/history';
import IngredientsPage from './containers/Ingredients/Ingredients';
import './App.css';

const App = () => (
  <Router history={history}>
    <Route path="/" component={Landing} />
    <Route path="/ingredients" component={IngredientsPage} />
  </Router>
);

export default App;

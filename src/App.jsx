import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/configureStore';
import History from './utils/history';
import Landing from './containers/Landing/Landing';
import IngredientsPage from './containers/Ingredients/IngredientsPage';
import ReceipsPage from './containers/Receips/ReceipsPage';
import './App.css';

const App = () => (
  <Provider store={Store}>
    <Router history={History}>
      <Route exact path="/" component={Landing} />
      <Route path="/ingredients" component={IngredientsPage} />
      <Route path="/receips" component={ReceipsPage} />
    </Router>
  </Provider>
);

export default App;

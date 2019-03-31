import React from 'react';
import { Router, Route } from 'react-router';
import Landing from './containers/Landing/Landing';
import history from './utils/history';
import './App.css';

const App = () => (
  <Router history={history}>
    <Route path="/" component={Landing} />
  </Router>
);

export default App;

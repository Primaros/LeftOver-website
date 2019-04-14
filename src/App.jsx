import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/configureStore';
import History from './utils/history';
import Landing from './containers/Landing/Landing';
import MainPage from './containers/MainPage';
import NotFound from './containers/errors/NotFound';
import ConnectionError from './containers/errors/ConnectionError';
import './App.css';

const App = () => (
  <Provider store={Store}>
    <Router history={History}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/leftover" component={MainPage} />
        <Route path="/connectionerror" component={ConnectionError} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;

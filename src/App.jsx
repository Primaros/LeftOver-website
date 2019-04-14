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

const conf = () => (
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <title>LeftOver</title>
  </div>
);

const App = () => (
  <Provider store={Store}>
    { conf() }
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

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Category from './components/Category';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path = '/' component={App}/>
      <Route exact path = '/category' component={Category}/>
    </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

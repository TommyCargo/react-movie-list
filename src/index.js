import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import thunk from 'redux-thunk';

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';


import redux from 'redux-thunk';

import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import { About } from './components/About';


import './style.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  
    }) : compose;
*/
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
 
  redux
)))


class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="main-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>

          <Route exact path="/" component={MoviesList} />
          <Route path="/about" component={About} />
          <Route path="/details/:id" component={MovieDetails} />
        </div>
      </Router>
    );
  }
}

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'));
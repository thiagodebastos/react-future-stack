import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import FastClick from 'fastclick';
import { ThemeProvider } from 'styled-components';
import 'semantic-ui-css/semantic.css';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';

import router from './router';
import history from './history';

const defaultTheme = {
  primary: 'palevioletred',
  secondary: 'white'
};

// Loaded with utils/routes-loader.js
let routes = require('./routes.json').default;

const container = document.getElementById('container');
const store = configureStore();

function renderComponent(component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          {component}
        </ThemeProvider>
      </Provider>
    </AppContainer>,
    container
  );
}

// Find and render a web page matching the current URL path, if such page is not found then render an error page (see
// routes.json, core/router.js)
function render(location) {
  router
    .resolve(routes, location)
    .then(renderComponent)
    .catch(error =>
      router.resolve(routes, { ...location, error }).then(renderComponent)
    );
}

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/ReactJSTraining/history/tree/master/docs#readme
history.listen(render);
render(history.location);

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./routes.json', () => {
    routes = require('./routes.json').default; // eslint-disable-line global-require
    render(history.location);
  });
}

import { Controller } from '@hotwired/stimulus';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HelloController from './hello_controller';
import application from './application';

/* eslint-disable import/extensions */
import App from '../components/App'; // Assuming App is a JSX file, remove the extension
import store from '../store/store'; // Remove the extension if it's unnecessary
/* eslint-enable import/extensions */

application.register('hello', HelloController);

// Connects to data-controller="react-router"
export default class extends Controller {
  /* eslint-disable class-methods-use-this */
  connect() {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  }
/* eslint-enable class-methods-use-this */
}

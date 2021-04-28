import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import loadFirstTime from './flux/actions/actions';

loadFirstTime();

ReactDOM.render(
  <Auth0Provider
    domain="dev-2g4kzese.eu.auth0.com"
    clientId="DGOFYJocU1yk7KTa0p84QMPjHutQNJ91"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Auth0Provider>,
  document.getElementById('root')
);

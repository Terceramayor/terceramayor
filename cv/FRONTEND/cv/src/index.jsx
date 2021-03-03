import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AOS from 'aos';
import Cv from './components/Cv';
import store from './redux/store/store';
import './assets/-globalStyles.scss';
import './index.scss';
import 'aos/dist/aos.css';

AOS.init();

ReactDOM.render(
  <Provider store={store()}>
    <React.StrictMode>
      <Cv />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

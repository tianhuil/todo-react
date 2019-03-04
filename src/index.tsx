import React from 'react';
import ReactDOM from 'react-dom';
import AppComp from './components/App';
import './styles/index.scss';

ReactDOM.render(
  <React.Fragment>
    <AppComp/>
  </React.Fragment>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.scss';

ReactDOM.render(
  <React.Fragment>
    <App/>
    <div className="text">text</div>
  </React.Fragment>,
  document.getElementById('app')
);

module.hot.accept();

import React from 'react'
import { render } from 'react-dom'
import AppComp from './components/App'
import './styles/index.scss'

render(
  <React.Fragment>
    <AppComp/>
  </React.Fragment>,
  document.getElementById('app'),
)

if (module.hot) {
  module.hot.accept()
}

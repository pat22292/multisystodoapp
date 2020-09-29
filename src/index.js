import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <div style={{width: '100vw', textAlign: "center", paddingTop: "100px", fontSize: '2rem'}}>
    <App/>
    </div>
   
  </Provider>,
  document.getElementById('root')
)

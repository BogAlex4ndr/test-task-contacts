import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import MainPage from './Pages/MainPage'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Router from './Router/Router'

function App() {

  return (
    <div id="wrapper">
    <Provider store={store}>
      <Router/>
    </Provider>
    </div>
  )
}

export default App

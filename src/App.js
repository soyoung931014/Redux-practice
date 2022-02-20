import React from 'react'
import './App.css'
import Subscribers from './components/Subscribers'
import { Provider } from 'react-redux' //* npm install redux react-redux
import store from './redux/store'
import Display from './components/Display'
import Views from './components/Views'
import Comments from './components/Comments'
function App() {
  return (
    <Provider store={store}> //* Provider은 store의 프롭스로 가져온다.
      <div className ="App">
        <Comments/>
        <Subscribers/>
        <Views />
        <Display/>
      </div>
    </Provider>
  )
}

export default App

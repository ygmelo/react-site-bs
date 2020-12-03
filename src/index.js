import React     from 'react'
import ReactDOM  from 'react-dom'

import Navbar    from './components/Navbar'
import Footer    from './components/Footer'
import Body      from './components/Body'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './style/main.css';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Navbar/>,
        <Body/>,
        <Footer/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
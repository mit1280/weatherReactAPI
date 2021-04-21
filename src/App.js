import './App.css';
import React, { Component } from "react"
import Home from './components/Home'
import Town from './components/town'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'a'
    }
  }

  render() {
    return (
      <div className="app">
      
        <div className="topnav">
          <p onClick={() => this.setState({ selectedMenu: 'a' })}>About Me</p>
          <p onClick={() => this.setState({ selectedMenu: 'h' })}>Territories</p>
          <a  href="https://github.com/mit1280"> GitHub</a>
          <a href="https://www.linkedin.com/in/mitpatel12/"> Linkedin</a>
          <a href="http://www.jetir.org/papers/JETIR2002273.pdf"> Publication</a>
        </div>
        
        {this.state.selectedMenu === 'a' ?
          <Home/>
          :
            <Town />
        }
      </div>
    );
  }
}


export default App;


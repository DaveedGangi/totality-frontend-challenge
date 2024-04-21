import { Component} from "react" 


import {Switch, Route} from 'react-router-dom'

import Home from "./components/Home"

import Login from "./components/Login"

import ProtectedRouter from "./components/ProtectedRouter"


import "./App.css"
class App extends Component {


  render() {

    return (
     
      <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRouter exact path="/" component={Home}/>
    
      </Switch>
    
    )
  }
}

export default App
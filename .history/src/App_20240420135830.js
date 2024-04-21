import { Component} from "react" 


import {Switch, Route,BrowserRouter} from 'react-router-dom'

import Home from "./components/Home"

import Login from "./components/Login"

import ProtectedRouter from "./components/ProtectedRouter"

import "./App.css"
class App extends Component {


  render() {

    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRouter exact path="/" component={Home}/>
      <ProtectedRouter exact path="/account" component={accou
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App
import { Component} from "react" 


import {Switch, Route,BrowserRouter} fromreact-router-dom'

import Home from "./components/Home"

import Login from "./components/Login"

import "./App.css"
class App extends Component {


  render() {

    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/" component={Home}/>
     
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App
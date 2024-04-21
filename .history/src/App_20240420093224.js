import { Component} from "react" 


import {Switch, Route,BrowserRouter} from 'react-router-dom'

import Home from "./components/Home"

import 

import "./App.css"
class App extends Component {


  render() {

    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App
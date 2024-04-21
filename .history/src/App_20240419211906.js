import { Component} from "react" 

import {Route} from "react-router-dom"

import Home from "./co"

class App extends Component {


  render() {

    return (


      <Route exact="/" component={Home}/>

    )
  }
}
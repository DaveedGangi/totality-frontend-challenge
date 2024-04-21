import { Component} from "react" 

import {Route} from "react-router-dom"

import Home from "./components/Home"

import "./"
class App extends Component {


  render() {

    return (


      <Route exact="/" component={Home}/>

    )
  }
}

export default App
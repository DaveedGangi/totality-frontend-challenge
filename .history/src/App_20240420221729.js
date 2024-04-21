import { Component} from "react" 


import {Switch, Route} from 'react-router-dom'

import Home from "./components/Home"

import Login from "./components/Login"

import ProtectedRouter from "./components/ProtectedRouter"

import Cart from "./components/Cart"

import CreateContext from "./components/Context"

import "./App.css"
class App extends Component {

  state={cartList:[]}


  render() {

    return (
      <CreateContext.Provider value={{}}
     
      <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRouter exact path="/" component={Home}/>
      <ProtectedRouter exact path="/cart" component={Cart}/>
      </Switch>
    
    )
  }
}

export default App
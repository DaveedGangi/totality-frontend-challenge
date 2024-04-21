import { Component} from "react" 


import {Switch, Route} from 'react-router-dom'

import Home from "./components/Home"

import Login from "./components/Login"

import ProtectedRouter from "./components/ProtectedRouter"

import Cart from "./components/Cart"

import CreateContext from "./components/Context"

import "./App.css"

import ProductDetails from "./components/PropertyDetails"
class App extends Component {

  state={cartList:[]}

  addCart =(id)=>{
    console.log(id)
    const{cartList} = this.state
    this.setState({cartList:[...cartList,id]})
    console.log(cartList)
  }

  deleteCart =(id)=>{
    const{cartList} = this.state
    const updateCart=cartList.filter((each)=>each!==id)
    this.setState({cartList:updateCart})
  }


  render() {

    const{cartList} = this.state

    return (
      <CreateContext.Provider value={{cartList,addCart:this.addCart,
      deleteCart:this.deleteCart}}>
     
      <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRouter exact path="/" component={Home}/>
      <ProtectedRouter exact path="/cart" component={Cart}/>
      <ProtectedRouter exact path="/rental/:id" component={ProductDetails}/>
      </Switch>

      </CreateContext.Provider>
    
    )
  }
}

export default App
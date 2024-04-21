import { Component} from "react" 


import {Switch, Route} from 'react-router-dom'

import Home from "./components/Home"

import Login from "./components/Login"

import ProtectedRouter from "./components/ProtectedRouter"

import Cart from "./components/Cart"



import CreateContext from "./Context"

import "./App.css"

import ProductDetails from "./components/PropertyDetails"
class App extends Component {

  state={cartList:[]}


  addCartItem =(product)=>{
    console.log("Hello Product")
    console.log(product); 
    console.log(product.quantity);
    this.setState(prevState=>({cartList:[...prevState.cartList,product]}))
  }

  removeCartItems = id => {
    const {cartList} = this.state
    const removing = cartList.filter(each => each.id !== id)
    this.setState({cartList: removing})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const quantityDecreased = cartList.find(each => each.id === id)

    if (quantityDecreased.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(each => {
          if (each.id === id) {
            const decreasing = each.quantity - 1
            return {...each, quantity: decreasing}
          }
          return each
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(each => {
        if (each.id === id) {
          const increaseQuantity = each.quantity + 1
          return {...each, quantity: increaseQuantity}
        }
        return each
      }),
    }))
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }
  render() {

    const{cartList} = this.state
    console.log("APPjs")
    console.log(cartList)
   return (
      <CreateContext.Provider value={{cartList,addCart:this.addCartItem,
      deleteCart:this.removeCartItems}}>
     
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
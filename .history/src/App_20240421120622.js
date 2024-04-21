import { Component} from "react" 


import {Switch, Route} from 'react-router-dom'

import Home from "./components/Home"

import Login from "./components/Login"

import ProtectedRouter from "./components/ProtectedRouter"



import CreateContext from "./components/Context"

import "./App.css"

import ProductDetails from "./components/PropertyDetails"
class App extends Component {

  state={cartList:[]}


  addCartItem = product => {
    const {cartList} = this.state

    const findingBasedOnId = cartList.find(
      eachCart => eachCart.id === product.id,
    )
    console.log(findingBasedOnId)
    if (findingBasedOnId) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(each => {
          if (findingBasedOnId.id === each.id) {
            const quantityProduct = each.quantity + 1
            return {...each, quantity: quantityProduct}
          }
          return each
        }),
      }))
    } else {
      this.setState(prevState => ({
        cartList: [...prevState.cartList, product],
      }))
    }
  }

  removeCartItem = id => {
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

  changeBasedOnOtherInputs = () => {
    this.setState({basedOnPaymentMethod: false})
  }
  render() {

    const{cartList} = this.state
    console.log("APPjs")
    console.log(cartList)
    return (
      <CreateContext.Provider value={{cartList,addCart:this.addCart,
      deleteCart:this.deleteCart}}>
     
      <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRouter exact path="/" component={Home}/>
      <ProtectedRouter exact path="/cart" component={ProductDetails}/>
      <ProtectedRouter exact path="/rental/:id" component={ProductDetails}/>
      </Switch>

      </CreateContext.Provider>
    
    )
  }
}

export default App
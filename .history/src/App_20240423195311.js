import { Component} from "react" 


import {Switch, Route,Redire} from 'react-router-dom'

import Home from "./components/Home"

import Login from "./components/Login"

import ProtectedRouter from "./components/ProtectedRouter"

import Cart from "./components/Cart"



import CreateContext from "./Context"

import "./App.css"

import ProductDetails from "./components/PropertyDetails"

import FormExample from "./components/validation"

import NotFound from "./components/NotFound"

class App extends Component {

  state={cartList:[]}


  addCartItem =(product)=>{

    const {cartList}=this.state

   
    const findingBaseId=cartList.find((each)=>each[0].id===product[0].id)
    console.log("Finding base")
    console.log(findingBaseId)

    if(findingBaseId){
      this.setState(prevState=>({cartList:prevState.cartList.map((eachQ)=>{
        if(eachQ[0].id===findingBaseId[0].id){
          const updateQ=eachQ.quantity+product.quantity
          return {...eachQ,quantity:updateQ}
        }
        return eachQ
      })}))

    }
    else{
      this.setState(prevState=>({cartList:[...prevState.cartList,product]}))
    }

  }

  removeCartItems = id=> {
  
   const {cartList}=this.state
   const removeCartItem=cartList.filter((eachCart)=>eachCart[0].id!==id)
   this.setState({cartList:removeCartItem})

  }

  incrementCartItemQuantity=(id)=>{
   
    
    this.setState(prevState=>({cartList:prevState.cartList.map((eachCart)=>{
    if(eachCart[0].id===id){
      const increaseQuantity=eachCart.quantity+1 
      return {...eachCart,quantity:increaseQuantity}
    }
    return eachCart
  }
)}))
  }

  decrementCartItemQuantity=(id)=>{
    
    this.setState(prevState=>({cartList:prevState.cartList.map((eachCart)=>{
      if(eachCart[0].id===id){
        if(eachCart.quantity>1){
          const decrementQuantity=eachCart.quantity-1 
          return {...eachCart,quantity:decrementQuantity}
        }
      }
      return eachCart
    })}))
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
        removeAllItems:this.removeAllCartItems,incrementCartItemQuantity:this.incrementCartItemQuantity,
        decrementCartItemQuantity:this.decrementCartItemQuantity,
      deleteCart:this.removeCartItems}}>
     
      <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRouter exact path="/" component={Home}/>
      <ProtectedRouter exact path="/cart" component={Cart}/>
      <ProtectedRouter exact path="/rental/:id" component={ProductDetails}/>
      <ProtectedRouter exact path="/FormExample" component={FormExample}/>
      <Route path="/not-found" component={NotFound}/>
      <Redirect to="not-found"/>
      </Switch>
      </CreateContext.Provider>
    
    )
  }
}

export default App
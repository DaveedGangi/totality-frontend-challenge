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

  addCart =(item)=>{
  
    console.log(item);
    const {cartList} = this.state 
    const findingBasedOnId=cartList.find((each)=>each.id===item.id)

    if(findingBasedOnId){

      this.setState(prevState=>({
        cartList:prevState.cartList.map((eachCart)=>{
          if(findingBasedOnId.id==each.id){
            const quantityProduct=each.quantity+1
            return {...each,quanti}
          }
        })
      }))
    }
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
      <ProtectedRouter exact path="/cart" component={ProductDetails}/>
      <ProtectedRouter exact path="/rental/:id" component={ProductDetails}/>
      </Switch>

      </CreateContext.Provider>
    
    )
  }
}

export default App
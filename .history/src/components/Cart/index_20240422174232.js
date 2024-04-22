
import {Component} from "react" 

import {Link} from "react-router-dom"

import { BsCartDash } from "react-icons/bs";

import Cookies from "js-cookie"

import CreateContext from "../../Context"



import "./index.css"

class Cart extends Component{
    state={counting:0}

    
removeCookie=()=>{
    Cookies.remove("jwt_token")
    const{counting}=this.state
    this.setState({counting:counting+1})
  }

    render(){
        const jwtToken=Cookies.get("jwt_token")
        if(jwtToken===undefined){
            const {history}=this.props
            history.push("/login")
        }


        return(


            <CreateContext.Consumer>
                {
                    value=>{
                        const{cartList,deleteCart,removeAllItems,incrementCartItemQuantity,decrementCartItemQuantity}=value 
                        

                        const removeAllItemsFromCart=()=>{
                          removeAllItems();
                        }
                         const removeCartItemBasedOnId=(event)=>{
                          console.log("Remove");
                          console.log(event.target.id);
                          console.log("removes")
                          deleteCart(event.target.id)
                         }
                        return(
                            <div>

                                
      <div className="NavBarForRental">
        <div>
          <Link to="/">
        <img className="logoHome" src="https://i.ibb.co/S5wRgkS/Screenshot-2024-04-20-110529.png" alt="logo" /> 
       </Link>
        </div>

        <div className="cartAndLogOut">
        <div className="cartIcon">
          <Link className="CartLink" to="/cart">
        <p><BsCartDash />&nbsp;{cartList.length>0?cartList.length:null} </p> 
        </Link>
        </div>

        <div>
        
        <button className="LogOutButton" type="button" onClick={this.removeCookie}>Log out</button>
        </div>
        </div>


      </div>
                          <div>
                            {
                              cartList.length===0?<div className="EmptyImageBg">
                                <div>
                                <img className="EmptyCartImage" src="https://th.bing.com/th/id/R.afa6a28d0ee0b5e7d55b7a5aecdfedec?rik=eOl3Z%2bU0XvmYlw&riu=http%3a%2f%2fiticsystem.com%2fimg%2fempty-cart.png&ehk=0omil1zRH7T3Pb5iTzvueamUQLSSb55vgY7dLFF8Bl8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="emtpy"/>
                             </div>
                             <div ><Link className="BuyPropertyLink" to="/"><button className="buyProperty" type="button">Buy Property</button></Link></div>
                              </div>:<div>

                                <div className="removeAllBgForButton"> 
                                  <div>
                                    <button className="removeAllButton" onClick={removeAllItemsFromCart} type="button" >Remove All</button>
                                  </div>
                                </div>
                              {cartList.map((each)=>(
                               <div className="divForCartItems" key={each[0].id}>
                              
                             <div>
                               <img className="CartImageItem" src={each[0].imageUrl} alt="ok"/>
                             </div>
                              <div>
                               <h1 className="cartImageTitle">{each[0].title}</h1>
                               <h1 className="cartImageTitle">Price {each.quantity*each[0].pricess} L</h1>
                             </div>
                             <div>
                              <button onClick={decrementCartQuantity} type="button">-</button>{each.quantity}
                              <button type="button">+</button>
                             </div>
                             <div>
                             <button id={each[0].id} onClick={removeCartItemBasedOnId} type="button">Remove</button>
                             </div>
                              </div>
                              ))
                              }</div>
                            }

                         

                              
                              </div>

                            </div>
                        )
                    }
                }

            </CreateContext.Consumer>
        )
    }
}

export default Cart
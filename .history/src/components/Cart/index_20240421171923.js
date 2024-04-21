
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
                        const{cartList,}=value 
                        
                         
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
        <p><BsCartDash />&nbsp; {cartList.length}</p> 
        </Link>
        </div>

        <div>
        
        <button className="LogOutButton" type="button" onClick={this.removeCookie}>Log out</button>
        </div>
        </div>


      </div>
                          <div>
                            {
                              cartList.length===0?<div>Empty</div>:<
                            }

                         

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
                              <button type="button">Remove</button>
                              </div>
                               </div>
                               ))
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
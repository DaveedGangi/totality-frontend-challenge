
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
                        const{cartList}=value 
                        
                        console.log("INCART")
                            console.log(cartList)
                        const stores=cartList.storageForRental
                         console.log(stores)
                         const quantity=cartList.quantity
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
        <p><BsCartDash />&nbsp; 00</p> 
        </Link>
        </div>

        <div>
        
        <button className="LogOutButton" type="button" onClick={this.removeCookie}>Log out</button>
        </div>
        </div>


      </div>
                               {
                                cartList.storageForRental.map((each)=>(
                                    <div key={each.id}>
                                        <img className="CartImageItem" src={each.imageUrl} alt={each.title}/>
                                      <h1 className="cartImageTitle">{each.title}</h1>
                                      
                                       <h1>Rs {each.pricess*quantity} L</h1>
                                       <button type="button">Delete</button>
                                    </div>
                                ))
                               }
                            </div>
                        )
                    }
                }

            </CreateContext.Consumer>
        )
    }
}

export default Cart
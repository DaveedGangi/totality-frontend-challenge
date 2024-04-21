
import {Component} from "react" 

import CreateContext from "../../Context"

import "./index.css"

class Cart extends Component{


    render(){


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
                               {
                                cartList.storageForRental.map((each)=>(
                                    <div key={each.id}>
                                        <img className="CartImageItem" src={each.imageUrl} alt={each.title}/>
                                      <h1 className="cartImageTitle">{each.title}</h1>
                                      
                                       <h1>Rs {each.pricess*quantity} L</h1>
                                       <button type="button" 
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
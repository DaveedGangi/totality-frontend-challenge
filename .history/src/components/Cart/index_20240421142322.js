
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
                         const quantity=cartList.quantityForRentalquantity
                        return(
                            <div>
                               {
                                cartList.storageForRental.map((each)=>(
                                    <div key={each.id}>
                                        <img className="CartImageItem" src={each.imageUrl} alt={each.title}/>
                                      
                                      
                                       <h1>Rs {each.pricess*quantity} L</h1>
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
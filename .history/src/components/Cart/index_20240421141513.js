
import {Component} from "react" 

import CreateContext from "../../Context"

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
                        return(
                            <div>
                               {
                                cartList.storageForRental
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
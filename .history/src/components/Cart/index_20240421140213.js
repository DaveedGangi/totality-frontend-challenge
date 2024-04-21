
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
                           console.log(cartList.quantity)

                         const stores=cartList.map((each)=>({
                            each.storageForRental.title
                         })
                         console.log(stores)
                        return(
                            <div>
                                { cartList.length===0?<div>No Property added to Cart</div>:
                                    <h1>{cartList.map((each)=>
                                        <div key={each.id}>{each.duplicateRentalStorage.title}</div>
                                    )
                                       }</h1>
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
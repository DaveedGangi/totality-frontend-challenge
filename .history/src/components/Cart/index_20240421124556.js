
import {Component} from "react" 

import CreateContext from "./CreateContext

class Cart extends Component{


    render(){


        return(


            <CreateContext.Consumer>
                {
                    value=>{
                        const{cartList}=value 
                        console.log("INCART")
                            console.log(cartList)
                            const itemsD=cartList.duplicateRentalStorage.title
                            console.log(itemsD)
                            console.log(cartList[0].duplicateRentalStorage.title)
                        return(
                            <div>
                                { cartList.length===0?<div>No Property added to Cart</div>:
                                    <h1>hello</h1>
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
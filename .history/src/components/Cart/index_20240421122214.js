
import {Component} from "react" 

import CreateContext from "../Context"

class Cart extends Component{


    render(){


        return(


            <CreateContext.Consumer>
                {
                    value=>{
                        const{cartList}=value 
                        const
                            console.log(cartList)
                        return(
                            <div>
                                { cartList.length===0?<div>No Property added to Cart</div>:
                                    <h1>{cartList.title}</h1>
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
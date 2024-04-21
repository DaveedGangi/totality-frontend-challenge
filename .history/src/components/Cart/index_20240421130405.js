
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
                            const itemsD=cartList.duplicateRentalStorage.title
                            console.log(itemsD)
                            const{duplicateRentalStorage}=ite
                            console.log(cartList[0].duplicateRentalStorage.title)
                        return(
                            <div>
                                { cartList.length===0?<div>No Property added to Cart</div>:
                                    <h1>{
                                        duplicateRentalStorage.map((each)=>(
                                            <div>
                                                <h1>{each.title}</h1>
                                            </div>
                                        ))}</h1>
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
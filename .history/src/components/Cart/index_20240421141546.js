
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
                                cartList.storageForRental.map((each)=>(
                                    <div key={each.id}>
                                        <h1>{each.title}</h1>
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
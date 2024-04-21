
import {Component} from "react" 

import CreateContext from "./CreateContext"

class Cart extends Component{


    render(){


        return(


            <CreateCConsumer>
                {
                    value=>{
                        const{cartList}=value 

                        return(
                            <div>
                                {
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
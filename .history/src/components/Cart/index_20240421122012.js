
import {Component} from "react" 

import Create

class Cart extends Component{


    render(){


        return(


            <CreateContext.Consumer>
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
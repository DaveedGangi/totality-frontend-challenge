
import {Component} from "react" 

import CreateContext from

class Cart extends Component{


    render(){


        return(


            <CreateCart.Consumer>
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

            </CreateCart.Consumer>
        )
    }
}

export default 
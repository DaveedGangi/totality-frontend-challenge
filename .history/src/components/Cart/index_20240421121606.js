
import {Component} from "react" 

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
                                    <h1>C</h1>
                                }
                            </div>
                        )
                    }
                }

            </CreateCart.Consumer>
        )
    }
}
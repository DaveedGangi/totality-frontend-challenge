
import {Component} from "react" 

class Cart extends Component{


    render(){


        return(


            <CreateCart.Consumer>
                {
                    value=>{
                        const{cartList}=value
                    }
                }

            </CreateCart.Consumer>
        )
    }
}
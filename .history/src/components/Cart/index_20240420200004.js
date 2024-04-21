
import {Component} from "react" 


class Cart extends Component {

    componentDidMount() {
        this.fetchApiAgain()
    }

    render(){


        return(

            <div>

                Hello Cart!
            </div>
        )
    }
}


export default Cart
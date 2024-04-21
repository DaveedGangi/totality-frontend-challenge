
import {Component} from "react" 


class Cart extends Component {

    componentDidMount() {
        this.fetchApiAgain();
    }

    fetchApiAgain=()=>{

      const api="https://faux-api.com/api/v1/rentalproperty_3874544664986126"
      
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
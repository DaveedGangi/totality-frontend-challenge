
import {Comoponent} from "react" 


class NavBar extends Component{

    
    render(){

        return(

            <div>
                <button type="button" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
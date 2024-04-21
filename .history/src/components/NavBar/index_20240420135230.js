
import {Comoponent} from "react" 


class NavBar extends Component{


    logout=()=>{

        Cookies.remove("jwt_token");
    }
    render(){

        return(

            <div>
                <button type="button" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
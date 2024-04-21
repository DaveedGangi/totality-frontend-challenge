
import {Comoponent} from "react" 

import Cookies from "js-cookie"


class NavBar extends Component{


    logout=()=>{

        Cookies.remove("jwt_token");
        const{history} = this.props 
        history.replace("/login");

    }
    render(){

        return(

            <div>
                <button type="button" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default NavBar
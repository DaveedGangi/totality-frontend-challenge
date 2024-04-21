
import {Component} from "react" 

import Cookies from "js-cookie"




class Account extends Component{


    logout=()=>{

        Cookies.remove('jwt_token');
        
    }
    render(){

        return(

            <div>
                <button type="button" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Account
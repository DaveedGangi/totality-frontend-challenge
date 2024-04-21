
import {Component} from "react" 

import Cookies from "js-cookie"




class Account extends Component{


    logout=()=>{

        Cookies.remove('jwt_token');
        const {history} = this.props
        const jwtToken=Cookies.get('jwt_token')
        if(jwtToken===undefined) {

      return history.replace("/login")
        }
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
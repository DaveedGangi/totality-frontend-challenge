
import {Comoponent} from "react" 


class NavBar extends Component{


    logout=()=>{

        Cookies.remove("jwt_token");
        const{history} = this.props 
        
    }
    render(){

        return(

            <div>
                <button type="button" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
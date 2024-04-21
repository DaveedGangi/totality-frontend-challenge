
import {Comoponent} from "react" 

i


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
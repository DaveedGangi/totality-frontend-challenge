
import {Comoponent} from "react" 


class NavBar extends Component{


    logout=()=>{

        const CookieData=Cookies.get()
    }
    render(){

        return(

            <div>
                <button type="button" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
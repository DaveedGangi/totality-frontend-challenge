import {Component} from "react" 

class Home extends Component{


  render(){

    const jwtToken=Cookies.get("jwt_token")

    return(

      <h1>You are in Home</h1>
    )
  }
}

export default Home
import {Component} from "react" 

class Home extends Component{


  render(){

    const jwtToken=Cookies.get("jwt_token")
    if(jwtToken===undefined){
      const {history}=this.props
    }

    return(

      <h1>You are in Home</h1>
    )
  }
}

export default Home
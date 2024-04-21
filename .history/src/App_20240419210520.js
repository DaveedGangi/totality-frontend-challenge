import { Component } from "react";

import "./App.css"

class App extends Component {

    componentDidMount() {
      this.fetchAPi()
    }

    fetchAPi=async()=>{

      const api="https://faux-api.com/api/v1/rentalproperty_3874544664986126"

      const options={
        method: "GET",

      }
      const response=await fetch(api,options)
      console.log(response)
      if(response.ok===true){
        
      }
    }
  render(){
    return (
      <div className="Bg">Hello Rental</div>
    )
  }
}
export default App;

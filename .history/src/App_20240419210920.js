import { Component } from "react";

import "./App.css"

class App extends Component {

  state={storagForRental:[]}

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
        const responseToJson=await response.json()
        console.log(responseToJson)
       const responseToJsonData=responseToJson.result.map((each)=>({
        id:each.id,
        title:each.title,
        description:each.description,
        location:each.location,
        
       }))
      }
    }
  render(){
    return (
      <div className="Bg">Hello Rental</div>
    )
  }
}
export default App;

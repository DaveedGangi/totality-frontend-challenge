import { Component } from "react";

import "./App.css"

class App extends Component {

  state={storageForRental:[]}

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
        pricess:each.pricess,
        imageUrl:each.imageUrl,
        noOfBedRooms:each.noOfBedRooms
       }))

       this.setState({storageForRental:responseToJsonData})
      }
    }
  render(){
    const{storageForRental} = this.state
    return (
      <div className="Bg">Hello Rental
      
      {
        storageForRental.map((eachRental) =>{
          <div>

            
          </div>
        })
  }</div>
    )
  }
}
export default App;

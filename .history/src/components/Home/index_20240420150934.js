import { Component } from "react";


import Cookies from "js-cookie"



import "./index.css"

const rentalState={
  initial:"INITIAL",
  isLoader:"LOADING",
  failure:"FAILURE",
  success:"SUCCESS",
}

class Home extends Component {

  state={storageForRental:[],rentalDataStatus:rentalState.initial}

    componentDidMount() {
      this.fetchAPi()
    }

    fetchAPi=async()=>{

      this.setState({rentalDataStatus:rentalState.isLoader})
     
      const api="https://faux-api.com/api/v1/rentalproperty_3874544664986126"

    
      const response=await fetch(api)
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
        noOfBedRooms:each.noOfBedRooms,
        priceRange:each.priceRange
       }))

       this.setState({storageForRental:responseToJsonData,rentalDataStatus:rentalState.success})
      }
      else{
        this.setState({rentalDataStatus:rentalState.failure})
    }
  }


  successForRental=()=>{
      const{storageForRental}=this.state

    return(

      <div className="Bg">
      
      {
        storageForRental.map((eachRental) =>(
          <div className="eachRental" key={eachRental.id}>
            <img className="rentalImage" src={eachRental.imageUrl} alt={eachRental.title} />
          <h1 className="title">{eachRental.title}</h1>
          <p class>{eachRental.description}</p>
          <p>Location: {eachRental.location}</p>
          <p>Price: {eachRental.priceRange}</p>

          <button type="button" className="BookNowButton">
            Book Now
          </button>
          </div>
        ))
  }
  
 
  </div>

      
    )
  }


  loaderForRental =()=>(
  <div>
    <div className="loaderBg">
    hello
    </div>
       
    </div>
  )


  failureForRental=()=>
  <div>
    <h1>Page Not Found</h1>
    <button onClick={this.fetchAPi}>Try Again</button>
  </div>

  rentalPropertyShow=()=>{
    const{rentalDataStatus}=this.state

  switch(rentalDataStatus){
    case rentalState.success:
      return this.successForRental()
    case rentalState.isLoader:
      return this.loaderForRental()
    case rentalState.failure:
      return this.failureForRental()
    default:
      return null    
  }
}
removeCookie=()=>{
  Cookies.remove("jwt_token")
  this.fetchAPi()
}

  render(){

    const jwtToken=Cookies.get("jwt_token");
    if(jwtToken===undefined) {
      const{history} = this.props
      history.replace("/login")
    }
   
    return (
     <div>

      <div className="NavBarForRental">
        <div>
        <img className="logoHome" src="https://i.ibb.co/S5wRgkS/Screenshot-2024-04-20-110529.png" alt="logo" /> 
        </div>
        <div>
        <button className="LogOutButton" type="button" onClick={this.removeCookie}>Log out</button>
        </div>
      </div>
     

     
      
      {
        this.rentalPropertyShow()
      }
     </div>
    )
  }
}
export default Home;

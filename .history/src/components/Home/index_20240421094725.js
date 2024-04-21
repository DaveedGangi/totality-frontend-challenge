import { Component } from "react";

import {Link} from "react-router-dom"


import Cookies from "js-cookie"



import { CiLocationOn } from "react-icons/ci";

import { RiMoneyRupeeCircleLine } from "react-icons/ri";

import { BsCartDash } from "react-icons/bs";

import {Puff} from "react-loader-spinner"

import Pagination from "../Pagination";

import CreateContext from "../Context";


import "./index.css"

const rentalState={
  initial:"INITIAL",
  isLoader:"LOADING",
  failure:"FAILURE",
  success:"SUCCESS",
}

class Home extends Component {

  state={text:"",storageForRental:[],rentalDataStatus:rentalState.initial,duplicateRentalStorage:[],pageNumber:1}

    componentDidMount() {
      this.fetchAPi()
    }

    fetchAPi=async()=>{

      this.setState({rentalDataStatus:rentalState.isLoader})
     const {text}=this.state
     console.log(text)
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

       this.setState({storageForRental:responseToJsonData,rentalDataStatus:rentalState.success,duplicateRentalStorage:responseToJsonData.slice(0,6)})
      }
      else{
        this.setState({rentalDataStatus:rentalState.failure})
    }
  }

  counting=(event)=>{
    <CreateContext.Consumer>
      {
        value=>{
          const{addCart}=value 
          addCart(event.target.id)
        }
      }
    </CreateContext.Consumer>
    
  }


  successForRental=()=>{
      const{duplicateRentalStorage,storageOfItems}=this.state
        console.log(storageOfItems)
    return(

      <div className="Bg">
      
      {
        duplicateRentalStorage.length===0?<div className="NoDataFound">Rental Property are not found div>:
        <div className="Bg">{
        duplicateRentalStorage.map((eachRental) =>(
          <div className="eachRental" key={eachRental.id}>
            <img className="rentalImage" src={eachRental.imageUrl} alt={eachRental.title} />
          <h1 className="title">{eachRental.title}</h1>
          <p className="description">{eachRental.description}</p>
          <div className="locationAndPrice">
          <p><CiLocationOn /> {eachRental.location}</p>
          <p> <RiMoneyRupeeCircleLine />{eachRental.priceRange}</p>
          </div>
          <Link to={`rental/${eachRental.id}`}>
          <button id={eachRental.id} onClick={this.counting} type="button" className="BookNowButton">
            Book Now
          </button>
          </Link>
          </div>
        ))
      }
      </div>
  }
  
  
 
  </div>

      
    )
  }


  loaderForRental =()=>(
  <div>
    <div className="loaderBg">
    
    <Puff type="puff" color="#00BFFF" height={100} width={100}/>
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

updatePageNumber=(number)=>{
  const{storageForRental} = this.state
  this.setState({pageNumber:number,duplicateRentalStorage:storageForRental.slice(
    number*6-6,number*6
  )

})}

changeUserInput=(event)=>{

  this.setState({text:event.target.value})
  
}

searchedInStorage=()=>{
  const{storageForRental,text}=this.state
  const searchedRental=storageForRental.filter((each)=>{
    return each.title.toLowerCase().includes(text.toLowerCase())
  })
  console.log(searchedRental)
  this.setState({duplicateRentalStorage: searchedRental})
}

priceBelow =(event)=>{
  const{storageForRental}=this.state
  const filteringOnPrice=storageForRental.filter((each)=>{
    return +each.pricess<=+event.target.value
  })
  console.log(filteringOnPrice)
  this.setState({duplicateRentalStorage:filteringOnPrice})
}

render(){

  const{storageForRental,pageNumber,text} = this.state
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

        <div className="cartAndLogOut">
        <div className="cartIcon">
          <Link className="CartLink" to="/cart">
        <p><BsCartDash />&nbsp; 00</p> 
        </Link>
        </div>

        <div>
        
        <button className="LogOutButton" type="button" onClick={this.removeCookie}>Log out</button>
        </div>
        </div>


      </div>
     

     <input value={text} type="text" onChange={this.changeUserInput} />
      <button type="button" onClick={this.searchedInStorage}>Search</button>
      
      <div>

        <input onClick={this.priceBelow} type="radio" id="priceBelow5" name="price" value="4"/>
        <label htmlFor="priceBelow5">Below 5 Lakhs</label>
        <br/>
        
        <input onClick={this.priceBelow} type="radio" id="priceBelow10" name="price" value="9"/>
        <label htmlFor="priceBelow10">Below 10 Lakhs</label>
        <br/>
        
        <input onClick={this.priceBelow} type="radio" id="priceBelow15" name="price" value="14"/>
        <label htmlFor="priceBelow15">Below 15 Lakhs</label>
        <br/>

         
        <input onClick={this.priceBelow} type="radio" id="priceBelow20" name="price" value="19"/>
        <label htmlFor="priceBelow20">Below 20 Lakhs</label>
        <br/>

         
        <input onClick={this.priceBelow} type="radio" id="priceBelow25" name="price" value="24"/>
        <label htmlFor="priceBelow25">Below 25 Lakhs</label>
        <br/>


      </div>
      
      {
        this.rentalPropertyShow()
      }

      <div>

       <Pagination data={storageForRental} pageNumber={pageNumber} updatePageNumber={this.updatePageNumber}/>
      </div>

     </div>
    )

  }
}
export default Home;

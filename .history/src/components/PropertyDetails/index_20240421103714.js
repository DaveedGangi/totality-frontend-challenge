import { Component } from "react";

import {Link} from "react-router-dom"


import Cookies from "js-cookie"



import { CiLocationOn } from "react-icons/ci";

import { RiMoneyRupeeCircleLine } from "react-icons/ri";

import { BsCartDash } from "react-icons/bs";

import {Puff} from "react-loader-spinner"

import Pagination from "../Pagination";

import "./index.css"

const rentalState={
  initial:"INITIAL",
  isLoader:"LOADING",
  failure:"FAILURE",
  success:"SUCCESS",
}

class ProductDetails extends Component {

  state={storageForRental:[],rentalDataStatus:rentalState.initial,duplicateRentalStorage:[],pageNumber:1,count:0,storageOfItems:[]}

    componentDidMount() {
      this.fetchAPi()
    }

    fetchAPi=async()=>{

      this.setState({rentalDataStatus:rentalState.isLoader})

      const {match}=this.props 
      const {params}=match 
      const {id} = params 
     
      const api=`https://faux-api.com/api/v1/rentalproperty_3874544664986126/${id}`

    
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
    const{count}=this.state 
    const idForItem=event.target.id
    this.setState(prevState=>({storageOfItems:[...prevState.storageOfItems,idForItem]}))
    console.log(event.target.id)
   
    this.setState({count:count+1})
  }


  successForRental=()=>{
      const{duplicateRentalStorage,storageOfItems}=this.state
        console.log(storageOfItems)
    return(

      <div className="Bg">
      
      {
        duplicateRentalStorage.map((eachRental) =>(
          <div className="eachRental" key={eachRental.id}>
            
            <img className="rentalImage" src={eachRental.imageUrl} alt={eachRental.title} />
          <h1 className="title">{eachRental.title}</h1>
          <p className="description">{eachRental.description}</p>
          <div className="locationAndPrice">
          <p><CiLocationOn /> {eachRental.location}</p>
          <p> <RiMoneyRupeeCircleLine />{eachRental.priceRange}</p>
          </div>
          <button id={eachRental.id} onClick={this.counting} type="button" className="BookNowButton">Add 
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

render(){

  const{storageForRental,pageNumber,count} = this.state
    const jwtToken=Cookies.get("jwt_token");
  
    if(jwtToken===undefined) {
      const{history} = this.props
      history.replace("/login")
    }
   
    return (
     <div>

      <div className="NavBarForRental">
        <div>
          <Link to="/">
        <img className="logoHome" src="https://i.ibb.co/S5wRgkS/Screenshot-2024-04-20-110529.png" alt="logo" /> 
        </Link>
        </div>

        <div className="cartAndLogOut">
        <div className="cartIcon">
          <Link to="/cart">
        <p><BsCartDash />&nbsp;{count}</p> 
        </Link>
        </div>

        <div>
        
        <button className="LogOutButton" type="button" onClick={this.removeCookie}>Log out</button>
        </div>
        </div>


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
export default ProductDetails;

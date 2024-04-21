
import {Component} from "react" 


class Cart extends Component {

    state={rentalDataStatus}

    componentDidMount() {
        this.fetchApiAgain();
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
  
         this.setState({storageForRental:responseToJsonData,rentalDataStatus:rentalState.success,duplicateRentalStorage:responseToJsonData.slice(0,6)})
        }
        else{
          this.setState({rentalDataStatus:rentalState.failure})
      }
    }
    render(){


        return(

            <div>

                Hello Cart!
            </div>
        )
    }
}


export default Cart
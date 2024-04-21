import { Component } from "react";

import "./App.css"

class App extends Component {

    componentDidMount() {
      this.fetchAPi()
    }

    fetchAPis=()=>{

      const api="https://faux-api.com/api/v1/rentalproperty_3874544664986126"

      const response=await fetch(api,op)
    }
  render(){
    return (
      <div className="Bg">Hello Rental</div>
    )
  }
}
export default App;

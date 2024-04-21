import { Component} from "react" 

import {Route}

class App extends Component {


  render() {

    return (


      <Route exact="/" component={Home}/>

    )
  }
}
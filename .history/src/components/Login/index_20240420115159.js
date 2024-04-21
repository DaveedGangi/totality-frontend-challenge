import {Component} from 'react'

import { Redirect } from 'react-router-dom'

import Cookies from 'js-cookie'



import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', isTrue: false}


  submitUserData = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const api = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(api, options)
    console.log(response)
    const responseToJson = await response.json()
    console.log(responseToJson)
    if (response.ok === true) {
      Cookies.set('jwt_token', responseToJson.jwt_token, {expires: 30})
      const {history} = this.props
      this.setState({isTrue: true})
      history.replace('/')
    } else {
      this.setState({
        errorMsg: responseToJson.error_msg,
        username: '',
        password: '',
      })
    }
  }

  storeUserName = event => {
    this.setState({username: event.target.value})
  }

  storeUserPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg, isTrue} = this.state
    console.log(username)
    console.log(password)
    console.log(isTrue)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
     return <Redirect to="/"/>
    }
    return (
         
            <div className="backgroundBgLogin">
              <div className="moviesHeadingLogin">
                <div>
                <img
                  className="website-image"
                  src="https://i.ibb.co/S5wRgkS/Screenshot-2024-04-20-110529.png"
                  alt="login website logo"
                />
                </div>
              </div>

              <div className="bg-flexing-item">
                <form className="card-login" onSubmit={this.submitUserData}>
                  <h1 className="heading-login">Login</h1>
                  <label className="label-username" htmlFor="username">
                    USERNAME
                  </label>
                  <br />
                  <input
                    id="username"
                    value={username}
                    onChange={this.storeUserName}
                    className="username"
                    type="text"
                    placeholder="USERNAME"
                  />
                  <br />
                  <br />
                  <label className="label-password" htmlFor="password">
                    PASSWORD
                  </label>
                  <br />
                  <input
                    value={password}
                    onChange={this.storeUserPassword}
                    className="password"
                    type="password"
                    placeholder="PASSWORD"
                    id="password"
                  />
                  <br />
                  <p className="errorMsg">{errorMsg}</p>
                  <br />
                  <div>
                    <button className="login-button" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
       
     
    )
  }
}

export default Login
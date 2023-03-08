import React, { Component } from 'react'
import UserData from './UserData'
import UserMessage from './UserMessage'

export class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: false,
      }
    }

    handleSignIn = () => {
      this.setState({
        isLoggedIn: true,
      })
    }

    handleSignOut = () => {
      this.setState({
        isLoggedIn: false,
      })
    }

  render() {
    return (
      <div>
        <UserData isLoaded={this.state.isLoaded} />
        <UserMessage 
          isLoggedIn={this.state.isLoggedIn} 
          handleSignIn={this.handleSignIn}
          handleSignOut={this.handleSignOut}
        />
      </div>
    )
  }
}

export default NestingComponents
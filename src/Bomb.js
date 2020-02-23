// your Bomb code her
import React, {Component} from "react"

class Bomb extends React.Component {
  constructor(props) { 
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

    render() {
      let dispMsg = ""
      if (this.state.secondsLeft === 0) {
         dispMsg = 'Boom!' 
      } 
      else {
         dispMsg =  this.state.secondsLeft + " seconds left before I go boom!"
      }
 
        return (
            <div>
                <p>{dispMsg}</p>
            </div>
        )    
    }
}

export default Bomb
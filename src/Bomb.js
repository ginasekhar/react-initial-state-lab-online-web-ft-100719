// your Bomb code here

import React, {Component} from "react"

class Bomb extends React.Component {
  constructor(props) { 
    super()
    this.state = {
      secondsLeft: props.initalCount
    }
    console.log(props.initialCount)
  }

  // bombTimer() {
  //   setTimeout (() => console.log("BOOM!"), this.state.secondsLeft)
  // }
    render() {
      const dispMsg = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
      
        return (
            <div>
                <p> {dispMsg} </p>
            </div>
        )    
    }
}

export default Bomb
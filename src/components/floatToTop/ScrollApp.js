import React from 'react'
import ScrollButton from './FloatToTop'

class ScrollApp extends React.Component {
    constructor() {
      super();
      
      this.state = {
        colors: ["#044747", "#079191", "#38adad", "#90e3e3", "#d5f7f7"]
      }
    }
    
    render () {
      return(
        <div className="long">
            <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        </div>
      )
    }
  }

export default ScrollApp
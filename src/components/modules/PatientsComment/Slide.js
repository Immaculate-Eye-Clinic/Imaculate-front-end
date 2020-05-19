import React, {Component} from "react";
import landingData from "./Landing"

class Slide extends Component {
    constructor(props) {
      super(props);
      this.state = {landing: landingData};
    }render() {
      return(
        <div>
            {this.state.landing.map((s, index) =>
                <div className={
                index === this.props.activeIndex ? 'active' : 'inactive'}
                key={index} >
                  <p>{s.comment}</p>
                  <h4 style={{textAlign: 'left'}}>- {s.patient}</h4>
                </div>
            )}
        </div>
      )
    }
  }export default Slide;
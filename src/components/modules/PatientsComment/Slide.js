import React, {Component} from "react";
import landingData from "./Landing"
import {StyleComments} from "./StyleComments"

class Slide extends Component {
    constructor(props) {
      super(props);
      this.state = {landing: landingData};
    }render() {
      return(
        <StyleComments>
            {this.state.landing.map((s, index) =>
                <div className={
                index === this.props.activeIndex ? 'active' : 'inactive'}
                key={index}>
                  <p>{s.comment}</p>
                  <h2>- {s.patient}</h2>
                </div>
            )}
        </StyleComments>
      )
    }
  }export default Slide;
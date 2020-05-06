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
            <section>
            {
            this.state.landing.map((s, index) =>
                <div className={
                index === this.props.activeIndex ? 'active' : 'inactive'}
                key={index}>
                    <h1>{s.title}</h1>
                    <p>{s.description}</p>
                </div>
            ) }
            </section>
        </StyleComments>
      )
    }
  }export default Slide;
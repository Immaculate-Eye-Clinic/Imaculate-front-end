import React, {Component} from "react";
import { Container } from "./style"

class Slide extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {landing: landingData};
    // }
    render() {
      return(
        <Container>
            <div className="all">
                <div className="why">
                    <div className="text">
                        <div className="title">More experienc</div>
                        <p>
                        Vivamus hendrerit mi non tincidunt maximus. Praesent vestibulum odio nunc, a viverra tortor vehicula ut. Fusce a sem nisl. Pellentesque maximus ipsum quis ipsum rhoncus, suscipit ornare orci dapibus. Sed
                        </p>
                    </div>
                    <div className="image">
                        <img src="/asset/img/experience.svg" />
                    </div>
                </div>
                <div className="why">
                    <div className="text">
                        <div className="title">More experienc</div>
                        <p>
                        Vivamus hendrerit mi non tincidunt maximus. Praesent vestibulum odio nunc, a viverra tortor vehicula ut. Fusce a sem nisl. Pellentesque maximus ipsum quis ipsum rhoncus, suscipit ornare orci dapibus. Sed
                        </p>
                    </div>
                    <div className="image">
                        <img src="/asset/img/experience.svg" />
                    </div>
                </div>
            </div>            
        </Container>
      )
    }
  }export default Slide;
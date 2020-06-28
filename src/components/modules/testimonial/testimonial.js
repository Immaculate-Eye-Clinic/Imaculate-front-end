import React, {Component} from "react";
// import { Container } from "./style"
// import Data from './data'
import { Testi } from './style';


class Testimonials extends Component {
    render() {
      return(
        <Testi>
            <div className="image">
                <img src="https://res.cloudinary.com/hisroyalwonginess/image/upload/v1567505818/Startng/234_813_674_3132_20190810_223902_mc4hyc.jpg" alt="" />
            </div>
            <div className="message">
                <span>
                    Immaculate Eye Clinic was established in 2015. Our staff comprise 
                    of a team all working together to provide quality optical and medical 
                    services.{'\u00A0'} Immaculate Eye Clinic was established in 2015. Our staff comprise 
                    of a team all working together to provide quality optical and medical 
                    services.{'\u00A0'} Immaculate Eye Clinic was established in 2015. Our staff comprise 
                    of a team all working together to provide quality optical and medical 
                    services.{'\u00A0'}
                </span>
            </div>
            <div className="name">
                <span>mcbobby madu</span>
            </div>
        </Testi>
      )
    }
  }export default Testimonials;
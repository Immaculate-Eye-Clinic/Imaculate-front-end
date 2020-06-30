import React, {Component} from "react";
import { Container } from "./style"
import Data from './data'
import { Slide } from 'react-reveal';


class Slides extends Component {
    render() {
      return(
        <Container>
            <p className="what">Why Choose Us</p>
            <div className="all">
                {Data.map((why, index) => (
                    <React.Fragment>
                        <div className="why" key={why.id}>
                            <Slide bottom cascade>
                                <div className="text">
                                    <div className="title">{why.title}</div>
                                    <p>
                                        {why.text}
                                    </p>
                                </div>
                            </Slide>
                            <Slide bottom cascade>
                                <div className="image">
                                    <img src={why.imgUrl} alt="" />
                                </div>
                            </Slide>
                        </div>
                    </React.Fragment>
                ))}
            </div>            
        </Container>
      )
    }
  }export default Slides;
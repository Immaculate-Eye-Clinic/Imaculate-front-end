import React, {Component} from "react";
import { Container } from "./style"
import Data from './data'


class Slide extends Component {
    render() {
      return(
        <Container>
            <p className="what">Why Choose Us</p>
            <div className="all">
                {Data.map((why, index) => (
                    <React.Fragment>
                        <div className="why" key={why.id}>
                            <div className="text">
                                <div className="title">{why.title}</div>
                                <p>
                                    {why.text}
                                </p>
                            </div>
                            <div className="image">
                                <img src={why.imgUrl} />
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>            
        </Container>
      )
    }
  }export default Slide;
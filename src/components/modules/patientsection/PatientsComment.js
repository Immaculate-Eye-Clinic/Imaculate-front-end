import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <p className="legend">This is the space where what the patients give as feedback will return. This is just scrambled words cos i am lazy to go fetch lorem ipsum.</p>
                </div>
                <div> 
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel
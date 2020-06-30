import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import { Container, Arrow} from "./style"
import Testimonials from "./testimonial"

const CarouselUI = ({ position, handleClick, children }) => (
  <Container>
      <h2 style={{textAlign: "center"}}> What Patients Say</h2>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

function Testimonial(){
    return (
            <Carousel>
                <Slide right>
                    <Testimonials />
                </Slide>
                <Slide right>
                    <Testimonials />
                </Slide>
                <Slide right>
                    <Testimonials />
                </Slide>
            </Carousel>
        )
    }
    
    export default Testimonial;
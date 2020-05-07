import React, { Component } from 'react';
import Slide from './Slide';
import landingData from '../PatientsComment/Landing';
import LeftArrow from './left_arrow';
import RightArrow from './right_arrow';
import {StyleComments} from "./StyleComments"



export default 
class Slider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeIndex: 1,
      length: landingData.length
    };
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    
    if(index < 1) {
      index = length - 1;
    }
    else {
      index--;
    }this.setState({
      activeIndex: index
    });
  }
  
  goToNextSlide() {
      let index = this.state.activeIndex;
      let length = this.state.length;
      
      if(index === length - 1) {
        index = 0
      }
      else {
        index++;
      }this.setState({
        activeIndex: index
      });
  }

  render() {
    return (
      <StyleComments>
        <div className='left_arrow'>
          <LeftArrow
            goToPrevSlide={() => this.goToPrevSlide()}
          />
        </div>
        <div className='slider-text'>
          <Slide
            activeIndex={this.state.activeIndex}
          />
        </div>
        <div className = 'right_arrow'>
          <RightArrow
            goToNextSlide={() => this.goToNextSlide()}
          />
        </div>
      </StyleComments>
    );
  }

}
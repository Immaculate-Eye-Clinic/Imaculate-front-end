import React, { Component } from 'react';
import Slide from './Slide';
import landingData from '../PatientsComment/Landing';
import LeftArrow from './left_arrow';
import RightArrow from './right_arrow';
import {StyleComments} from "./StyleComments"

const styles = {
  transition: 'opacity 1s ease-in-out'
}

export default 
class Slider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeIndex: 0,
      length: landingData.length,
      fade: 0
    }
    this.goToNextSlide = this.goToNextSlide.bind(this)
  }

  componentDidMount = () => {

    setInterval(() =>{
        if (this.state.fade ===1) {
          this.setState({fade:0})
        }
    
      setTimeout(()=>{
        this.goToNextSlide()
      },1000)
    },5000)
    
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
      activeIndex: index,
      fade: 1
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
        activeIndex: index,
        fade: 1
      });
  }

  render() {
    return (
      <StyleComments>
        {this.state.fade} <br />
        {this.timer}
        <div className='left_arrow'>
          <LeftArrow
            goToPrevSlide={() => this.goToPrevSlide()}
          />
        </div>
        <div className='slider-text' style = {{...styles, opacity: this.state.fade}}>
          <p><h2>Our Patients Say</h2></p>
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
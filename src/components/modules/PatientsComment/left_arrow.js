import React, { Component } from 'react';

class LeftArrow extends Component {
    render() {
      return(
        <div className='backArrow' onClick={this.props.goToPrevSlide}>
          <img src = "https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588790202/arrow_left_mqayd8.svg" alt = "<" height = "25px" Width = "25px"/>
        </div>
      )
    }
  }export default LeftArrow;
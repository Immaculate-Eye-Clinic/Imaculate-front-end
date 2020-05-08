import React, { Component } from 'react';

class RightArrow extends Component {
    render() {
      return(
        <div className='backArrow' onClick={this.props.goToNextSlide}>
          <img src = "https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588790202/arrow_left_mqayd8.svg" alt = ">"  style={{transform: "scaleX(-1)"}} height = "15px" Width = "15px" />
        </div>
      )
    }
  }export default RightArrow;
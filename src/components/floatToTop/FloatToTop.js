import React from 'react'
import {Container} from './Style'

  class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0,
          disableButton: false,
          scrollPosition: 0,
          opacity: 0,
          visibility: 'hidden',
      };
    }
    
    handleScroll = (event) => {
      this.setState({
        scrollPosition: window.pageYOffset
      }, this.checkScroll)
    }

    checkScroll = () => {
      if (this.state.scrollPosition > 100) {
        this.setState({
          opacity: 1,
          visibility: 'visible'
        })
      }
      else{
        this.setState({
          opacity: 0,
          visibility: 'hidden'
        })
      }
    }

    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
          this.setState({
            disableButton: false
          })
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ 
        intervalId: intervalId ,
        disableButton: true
      });
    }
    
    render () {
      const scroll = {
        color: 'white'
      }
        return (
            <Container>
              <div>
                {window.onscroll = () => this.handleScroll()}
                <button title='Back to top' 
                  className = 'scroll' 
                  style = {{...scroll, opacity: this.state.opacity, visibility: this.state.visibility}}
                  onClick={this.state.disableButton ? null : () => { this.scrollToTop();}}
                  >
                    <i class="fa fa-arrow-up"></i>
                </button>
              </div>
            </Container>
        )
     }
  } 

export default ScrollButton
import React from 'react'
import {Container} from './Style'

  class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0,
          displayButton: false,
          scrollPosition: 0
      };
    }
    
    handleScroll = (event) => {
      this.setState({
        scrollPosition: window.pageYOffset
      }, this.checkScroll)
    }

    checkScroll = () => {
      if (this.state.scrollPosition > 0) {
        this.setState({
          displayButton: true
        })
      }
      else{
        this.setState({
          displayButton: false
        })
      }
    }

    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return (
            <Container>
              <div>
                {window.onscroll = () => this.handleScroll()}
                <button title='Back to top' className = {this.state.scrollPosition > 100 ? 'scroll_shown' : 'scroll_hidden'} 
                    onClick={ () => { this.scrollToTop(); }}>
                    <span className='arrow-up'>^</span>
                </button>
              </div>
            </Container>
        )
     }
  } 

export default ScrollButton
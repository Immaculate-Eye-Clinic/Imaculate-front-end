import React from 'react'
import {Div } from './FaqStyle'

class Faqprops extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
            
        }
    }
    render(props){
        return(
            <Div>
                <div className='services'>
                    <h2>{this.props.header}</h2>
                    <button onClick={() => this.setState({open : !this.state.open})} className='service-button'>
                        {this.props.question}
                        <div className='space'/>
                        <h3>{this.state.open === false ? `+` : `-`}</h3>
                    </button>
                    <div className='service-open'>
                        {this.state.open && 
                            <p>
                                {this.props.children}
                            </p>    
                        }
                    </div><hr/>
                </div>
            </Div>
        )
    }
}

export default Faqprops
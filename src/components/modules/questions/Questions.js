import React from 'react'
import {Div } from './Questionstyle'

class Questions extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }
    render(){
        return(
            <Div>
                <div className='services'>
                    <h2>Services</h2>
                    <button onClick={() => this.setState({open : !this.state.open})}>
                        What services do you provide?
                        <div className='space'/>
                        <h3>{this.state.open === false ? `+` : `-`}</h3>
                    </button>
                    <div className='service-open'>
                        {this.state.open && 
                            <div>
                                <p>Infinity Eye Clinic specialises in the diagnosis and
                                    treatment of Cataracts and Glaucoma. We provide an 
                                    efficient service for the treatment of Chalazion. We also 
                                    deal with General Ophthalmological conditions such as Dry
                                    Eye and Blepharitis. We manage both chronic diseases and
                                    urgent eye problems in adults and children
                                </p>
                            </div>   
                        }
                    </div><hr/>
                </div>
            </Div>
        )
    }
}

export default Questions
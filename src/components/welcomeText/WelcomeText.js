import React from 'react'
import {Div} from './Style'

class WelcomeText extends React.Component{
    render(){
        return(
            <Div>
                <div className='welcome'>
                    <h2>Welcome to Immaculate Eye Clinic</h2>
                    <p>Vivamus hendrerit mi non tincidunt maximus. Praesent vestibulum odio nunc, a viverra tortor vehicula ut. Fusce a sem nisl. Pellentesque maximus ipsum quis ipsum rhoncus, suscipit ornare orci dapibus. Sed<br/>
                    Vivamus hendrerit mi non tincidunt maximus. Praesent vestibulum odio nunc, a viverra tortor vehicula ut. Fusce a sem nisl. Pellentesque maximus ipsum quis ipsum rhoncus, suscipit ornare orci dapibus. Sed</p>
                </div>
                <div className='hours'>
                    <h1>Opening <b>Hours</b></h1>
                    <p1>Monday 08.00-18.00</p1>
                    <hr/>
                    <p2>Tuesday 08.00-18.00</p2>
                    <hr/>
                    <p3>Wednesday 08.00-18.00</p3>
                    <hr/>
                    <p4>Thursday 08.00-18.00</p4>
                    <hr/>
                    <p5>Friday 08.00-18.00</p5>
                    <hr/>
                    <p6>Saturday 08.00-18.00</p6><hr/>
                </div>
            </Div>
        )
    }
}

export default WelcomeText
import React from 'react'
import {Div} from './Style'
import Slide from 'react-reveal/Slide';

class WelcomeText extends React.Component{
    render(){
        return(
            <Div>
                <Slide bottom>
                    <div className='welcome'>
                        <h1 className="title">Welcome to Immaculate Eye Clinic</h1>
                        <p>Vivamus hendrerit mi non tincidunt maximus. Praesent vestibulum odio nunc, a viverra tortor vehicula ut. Fusce a sem nisl. Pellentesque maximus ipsum quis ipsum rhoncus, suscipit ornare orci dapibus. Sed
                        Vivamus hendrerit mi non tincidunt maximus. Praesent vestibulum odio nunc, a viverra tortor vehicula ut. Fusce a sem nisl. Pellentesque maximus ipsum quis ipsum rhoncus, suscipit ornare orci dapibus. Sed</p>
                    </div>
                </Slide>
                <Slide bottom>
                    <div className='image'>
                        <img src = "/Asset/Img/hospital.svg" alt = "Hospital" />
                    </div> 
                </Slide>
            </Div>
        )
    }
}

export default WelcomeText
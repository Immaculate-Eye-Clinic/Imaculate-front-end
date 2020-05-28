import React from 'react'
import {Div} from './Style'

class WelcomeText extends React.Component{
    render(){
        return(
            <Div>
                <div className='welcome'>
                    <h2>Welcome to Immaculate Eye Clinic</h2>
                    <p>Vivamus hendrerit mi non tincidunt maximus. Praesent vestibulum odio nunc, a viverra tortor vehicula ut. Fusce a sem nisl. Pellentesque maximus ipsum quis ipsum rhoncus, suscipit ornare orci dapibus. Sed
                    Vivamus hendrerit mi non tincidunt maximus. Praesent vestibulum odio nunc, a viverra tortor vehicula ut. Fusce a sem nisl. Pellentesque maximus ipsum quis ipsum rhoncus, suscipit ornare orci dapibus. Sed
                    Vivamus hendrerit mi non tincidunt maximus. Praesent vestibulum odio nunc, a viverra tortor vehicula ut. Fusce a sem nisl. Pellentesque maximus ipsum quis ipsum rhoncus, suscipit ornare orci dapibus. Sed</p>
                </div>
                <div className='image'>
                    <img src = "/Asset/Img/hospital.svg" alt = "Hospital" />
                </div>
            </Div>
        )
    }
}

export default WelcomeText
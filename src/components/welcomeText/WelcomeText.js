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
                <div className='hours'>
                    <h1>Opening Hours</h1>
                    <div className='schedules'>
                        <div className='days'>
                            <p>Monday</p>
                            <p>08.00 - 18.00</p>
                        </div>
                        <hr/>
                        <div className='days'>
                            <p>Tuesday</p>
                            <p>08.00 - 18.00</p>
                        </div>
                        <hr/>
                        <div className='days'>
                            <p>Wednesday</p>
                            <p>08.00 - 18.00</p>
                        </div>
                        <hr/>
                        <div className='days'>
                            <p>Thursday</p>
                            <p>08.00 - 18.00</p>
                        </div>
                        <hr/>
                        <div className='days'>
                            <p>Friday</p>
                            <p>08.00 - 18.00</p>
                        </div>
                        <hr/>
                        <div className='days'>
                            <p>Saturday</p>
                            <p>08.00 - 18.00</p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </Div>
        )
    }
}

export default WelcomeText
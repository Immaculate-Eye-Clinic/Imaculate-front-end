import React from 'react'
import {Style} from './Styles'

function MidSection(){
    return (
        <Style>
            <div className = "container_div">
                <div className = 'first_section'>
                    <div className = 'sub_container_first'>
                        <h3>We are A Team of Eyecare Professionals</h3>
                    </div>
                </div>

                <div className = 'photo_section'>
                    <img src = 'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1567505818/Startng/234_813_674_3132_20190810_223902_mc4hyc.jpg' alt = 'Doctor'></img>
                </div>

                <div className = 'working_hours'>
                    <div className = 'sub_container_hours'>
                        <h3>Working Hours</h3>
                        <h5>We're Open between these hours below</h5>
                        <div className = 'days_container'>
                            <div className = 'days'>Monday</div>      <div>9:00 AM - 5:00 PM</div>
                        </div>

                        <hr />

                        <div className = 'days_container'>
                            <div className = 'days'>Tuesday</div>     <div>9:00 AM - 5:00 PM</div>
                        </div>

                        <hr />

                        <div className = 'days_container'>
                            <div className = 'days'>Thursday</div>      <div>9:00 AM - 5:00 PM</div>
                        </div>

                        <hr />

                        <div className = 'days_container'>
                            <div className = 'days'>Friday</div>    <div>9:00 AM - 5:00 PM</div>
                        </div>
                    </div>    
                </div>
            </div>
        </Style>
    )
}

export default MidSection
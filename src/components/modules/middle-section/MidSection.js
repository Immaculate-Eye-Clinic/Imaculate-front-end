import React from 'react'
import {Style} from './Styles'
import {NavLink} from 'react-router-dom'
import FirstSectionPics from './FirstSectionPics'
import { Slide, Zoom } from 'react-reveal';

function MidSection(){
    return (
        <Style>
            <div className = "container_div">
                <Slide left>
                    <div className = 'first_section'>
                        <div className = 'sub_container_first'>
                            <h3>We are A Team of Eyecare Professionals</h3>
                            <FirstSectionPics />
                            <p>
                                Immaculate Eye Clinic was established in 2015. Our staff comprise of a team all working together to provide quality optical and medical services.{'\u00A0'}
                                <NavLink exact to='/about'  activeClassName='active'>Read More About Us</NavLink>
                            </p>                        
                        </div>
                    </div>
                </Slide>

                <Zoom cascade>
                    <div className = 'photo_section'>
                        <img src = 'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1567505818/Startng/234_813_674_3132_20190810_223902_mc4hyc.jpg' alt = 'Doctor'></img>
                        <h3>
                        Meet Our Clinical Director, DR. Wisdom Iheanacho
                        </h3>
                        <p>
                        He is an trained Optometrist and an expert in Oculoplasty, Pterygium, DCR surgeries
                        </p>
                    </div>
                </Zoom>

                <Slide right>
                    <div className = 'working_hours'>
                        <div className = 'sub_container_hours'>
                            <h3>Working Hours</h3>
                            <br />
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
                </Slide>
            </div>
        </Style>
    )
}

export default MidSection
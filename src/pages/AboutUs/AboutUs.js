import React from 'react'
import Services from '../services/Services'
import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/footer/footer'
import {Container} from './StyleAbout'
import AboutUsData from './AboutUsData'
import Contact from '../../components/modules/contactUs/Contact'

function AboutUs (){
    return(
        <div>
            <Header 
            bgcolor={'transparent'}
            title={'About Us'}
            subText={'Get to Know More About Us'}
            height={'70vh'}
            mobileHeight={'50vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            
            <Container>
                <div className="head">
                    <span className = 'intro_text'><h4><em><strong>Private Eye Care Services </strong></em></h4></span>
                    <br />
                    <div className="header">About <span className = 'immaculate_text'>Immaculate Eye Clinic</span></div>
                    <br />
                    <span className = 'sub_text'><div>Immaculate Eye Clinic is a Private Ophtalmology clinic in Imo State, around Awaka, Owerri - North.</div></span>
                    <br />
                    <div className = 'text_paragraph'>Our experienced Consultants provide expert care for a wide range of eye conditions. At our clinic, assessment of your eye condition will include a thorough examination, and many tests can be performed conveniently in-house. You will enjoy courteous, personalized medical attention and an exceptionally high level of care.</div>
                    <hr />
                </div>
                <div className = 'aboutUs_container'>
                    {AboutUsData.map((service, index) =>(
                    <Services key = {service.id} service = {service} />
                    ))}
                </div>
            </Container>
            <Contact />
            < Footer />
        </div>
        
    )
}

export default AboutUs
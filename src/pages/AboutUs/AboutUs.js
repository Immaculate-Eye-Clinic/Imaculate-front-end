import React from 'react'
import Services from '../services/ShowServices'
import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/footer/footer'
import {Container} from './StyleAbout'
import Contact from '../../components/modules/contactUs/Contact'

function AboutUs (){
    return(
        <Container>
            <Header 
            bgcolor={'transparent'}
            title={'About Us'}
            subText={'Get to Know More About Us'}
            height={'70vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <span><em><i>Private Ophtalmology</i></em> London</span>
            <div className = 'service_container'>
                <Services />
            </div>
            <Contact />
            < Footer />
        </Container>
    )
}

export default AboutUs
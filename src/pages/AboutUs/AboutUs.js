import React from 'react'
import Services from '../services/ShowServices'
import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/footer/footer'
import {Container} from './StyleAbout'
import Contact from '../../components/modules/contactUs/Contact'
import MapImage from '../../components/modules/contactUs/MapImage'

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
            <div className = 'service_container'>
                <Services />
            </div>
            <div>
                <MapImage />
            </div>
            <Contact />
            < Footer />
        </Container>
    )
}

export default AboutUs
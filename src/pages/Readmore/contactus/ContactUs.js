import React from 'react'

import Header from '../../../components/modules/Header/Header'
import Nav from '../blogNav/Nav'
import Contact from '../../../components/modules/contactUs/Contact'
import Footer from '../../../components/modules/footer/footer'
import  MapImage from '../../../components/modules/mapView/MapImage'

function ContactUs (){
    return(
        <div>
            <Header 
                bgcolor={'transparent'}
                title={'Contact Us'}
                subText={'How to contact us'}
                height={'70vh'}
                mobileHeight={'50vh'}
                img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <Nav />
            <MapImage />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactUs
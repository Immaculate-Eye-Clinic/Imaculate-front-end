import React from 'react'
import {Div } from './VisitStyle'

import Header from '../../components/modules/Header/Header'
import MapImage from '../../components/modules/mapView/MapImage'
import Footer from '../../components/modules/footer/footer'
import Contact from '../../components/modules/contactUs/Contact'

function VisitUs(){
    return(
        <Div>
            <Header 
                bgcolor={'transparent'}
                title={'Visit Us'}
                subText={'Get to Know More About Us'}
                height={'70vh'}
                mobileHeight={'50vh'}
                img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <MapImage /><br/>
            <Contact />
            <Footer />
        </Div>
    )
}


export default VisitUs
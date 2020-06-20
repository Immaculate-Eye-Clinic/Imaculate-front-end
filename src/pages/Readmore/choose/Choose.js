import React from 'react'
import {Div } from './ChooseStyle'

import Header from '../../../components/modules/Header/Header'
import BlogNav from '../blogNav/BlogNav'
import Contact from '../../../components/modules/contactUs/Contact'
import Footer from '../../../components/modules/footer/footer'

function Choose(){
    return(
        <Div>
            <Header 
            bgcolor={'transparent'}
            title={'About Us'}
            subText={'Get to Know More About Us'}
            height={'70vh'}
            mobileHeight={'50vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <BlogNav />
            <div className='texts'>
                <div>
                    <h1>Satisfaction Guarantee</h1>
                    <p>We guarantee 100% satisfaction with your first consultation, or your money back. No quibble.</p>
                </div>
            </div>
            <Contact />
            <Footer />
        </Div>
    )
}

export default Choose
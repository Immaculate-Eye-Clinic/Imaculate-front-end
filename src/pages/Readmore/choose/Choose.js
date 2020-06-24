import React from 'react'
import {Div } from './ChooseStyle'

import Header from '../../../components/modules/Header/Header'
import Nav from '../blogNav/Nav'
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
            <Nav />
            <div className='body'>
                <div className='texts'>
                    <div className='subtext'>
                        <h1>Satisfaction Guarantee</h1>
                        <p>We guarantee 100% satisfaction with your first consultation, or your money back. No quibble.</p>
                    </div><br/><hr/>
                    <div className='subtext'>
                        <h1>Read When You Need Us</h1>
                        <p>We offer consultations in the evening and at weekends to fit in with busy schedules. Appointments are usually available at short notice, so you needn’t face long waits.</p>
                    </div><br/><hr/>
                    <div className='subtext'>
                        <h1>Personal Services</h1>
                        <p>We deal directly with patients to provide efficient service with the personal touch.</p>
                    </div><br/><hr/>
                    <div className='subtext'>
                        <h1>Transparent Pricing</h1>
                        <p>We publish our prices so you’re in the know about costs. It’s more affordable than you might expect.</p>
                    </div><br/><hr/>
                    <div className='subtext'>
                        <h1>No Insurance Needed</h1>
                        <p>You don’t need health insurance to use our services. Only pay for treatment when you need it. Just book an appointment online or by phone.</p>
                    </div><br/><hr/>
                    <div className='subtext'>
                        <h1>Price Promise</h1>
                        <p>We’ll match the price of any local private eye clinic for your first consultation fee. So you know you’re getting value for money.</p>
                    </div><br/><hr/>
                    <div className='subtext'>
                        <h1>Transport Included</h1>
                        <p>Let us arrange a car and driver to take you to and from home or work. And it’s on us, if you are local (within 3 miles).</p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </Div>
    )
}

export default Choose
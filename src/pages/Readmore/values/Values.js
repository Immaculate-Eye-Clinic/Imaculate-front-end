import React from 'react'
import Header from '../../../components/modules/Header/Header'
import BlogNav from '../blogNav/BlogNav'
import {Div } from './ValuesStyle'
import Contact from '../../../components/modules/contactUs/Contact'
import Footer from '../../../components/modules/footer/footer'

function Values(){
    return(
        <Div>
            <Header 
            bgcolor={'transparent'}
            title={'Immaculate Values'}
            subText={'Get to Know More About our Values'}
            height={'70vh'}
            mobileHeight={'50vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <BlogNav />

            <div className='blogmessage'>
                <div className='first'>
                    <h3><i>Infinity Eye Clinic’s Values are Quality, Value For Money and Convenience.</i></h3>
                    <p1><b>Mr Kuang Hu MA MB BChir PhD FRCOphth<br/>
                        Consultant Ophthalmic Surgeon</b></p1>
                </div>
                <hr className='line'/>
                <div className='second'>
                    <div className="div">
                        <h2>Quality</h2>
                        <p>We aim always to provide a high quality service, focussing on patient satisfaction and outcomes. So, your first consultation is backed by our exclusive Satisfaction Guarantee</p>
                        <p><b>If you’re not 100% satisfied, we’ll give you your money back</b></p>
                        <p>What’s more, our Consultants undertake continuous professional development and benchmark their surgical outcomes against national standards</p>
                    </div>
                    <div className="div">
                        <h2>Value for Money</h2>
                        <p>We believe that private eye care should be as affordable as possible. So, we offer our Price Promise for your first consultation.</p>
                        <p><b>If any local private eye clinic is offering an initial consultation for less, we’ll match the price.</b></p>
                        <p>We also publish the fees for our consultations and tests in the interest of transparency.</p>
                    </div>
                    <div className="div">
                        <h2>Convenience</h2>
                        <p>We want to make eye care accessible. So, we offer consultations in the evenings and at weekends. We can also take care of your transport arrangements, providing a car and driver to take you to and from home or work – at our expense, if you are local (within 3 miles)</p>
                        <p><b>To keep things straightforward, you don’t need health insurance to use our services. Just book directly with us. You only pay for treatment when you need it.</b></p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
            
        </Div>
    )
}

export default Values
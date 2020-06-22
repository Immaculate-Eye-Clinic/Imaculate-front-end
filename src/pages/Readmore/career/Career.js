import React from 'react'
import {Div } from './CareerStyle'

import Header from '../../../components/modules/Header/Header'
import BlogNav from '../blogNav/BlogNav'
import Contact from '../../../components/modules/contactUs/Contact'
import Footer from '../../../components/modules/footer/footer'

function Career(){
    return(
        <Div>
            <Header 
                bgcolor={'transparent'}
                title={'Careers'}
                subText={'Get to know about our career'}
                height={'70vh'}
                mobileHeight={'50vh'}
                img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <BlogNav />
            <div className='textbody'>
                <div className='first'>
                    <h1>Talent Wanted</h1>
                    <p>We’re always on the lookout for talented and enthusiastic individuals to join our team.</p><br/>
                    <p><b>No matter what your role, Infinity Eye Clinic is a dynamic organisation that is committed to empowering its staff to deliver high-quality services to its clients.</b></p><br/>
                    <p>Team members who demonstrate the appropriate attributes can enjoy excellent compensation, flexible working patterns, and superb opportunities for career development and progression.</p><br/>
                    <p>Interested? Email us your CV <br/><a href='#'>info@immaculate.com</a></p>
                </div>
                <div className='second'>
                    <h1>Practicing Privileges</h1>
                    <p>We are committed to attracting and retaining highly-trained Ophthalmologists to work at Infinity Eye Clinic. So, we offer outstanding terms to those who share our values. For specialists with the right attributes wishing to undertake high-quality private practice, we have eliminated prohibitive set-up costs and unpalatable rentals.</p><br/>
                    <p><b>We want to empower you to concentrate on what you do best – looking after your patients.</b>  Let us take care of marketing and promotion, answering telephone calls and emails, booking appointments, provision and maintenance of equipment, supply of consumables, handling of medical records, client invoicing and fee collection, as well as dictation and secretarial services.</p><br/>
                    <p>Interested? Email us your CV <br/><a href='#'>info@immaculate.com</a></p>
                </div>
            </div>
            <Contact />
            <Footer />
        </Div>
    )
}

export default Career
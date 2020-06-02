import React from "react"
import ServicesData from "./ServicesData"
import Services from "./Services"
import {FlexStyle} from "./Styles"
import Header from '../../components/modules/Header/Header'
import Footer from "../../components/modules/footer/footer"
import {Page} from './Styles'

function ShowServices (props){
    return(
        <div>
        <Header 
            bgcolor={'transparent'}
            title={'Our Services'}
            subText={'Get familiar with our Services'}
            height={'70vh'}
            mobileHeight={'50vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
        />
        <Page>
            <span className = 'intro_text'><h4><em><strong>Private Eye Care Services </strong>  Imo State</em></h4></span>
            <br />
            <h1>About <span className = 'immaculate_text'>Immaculate Eye Clinic</span></h1>
            <br />
            <span className = 'sub_text'><h3>Immaculate Eye Clinic is a Private Ophtalmology clinic in Imo State, around Awaka, Owerri - North.</h3></span>
            <br />
            <div>Our experienced Consultants provide expert care for a wide range of eye conditions. At our clinic, assessment of your eye condition will include a thorough examination, and many tests can be performed conveniently in-house. You will enjoy courteous, personalized medical attention and an exceptionally high level of care.</div>
            <hr />
            <FlexStyle>
                {ServicesData.map((service, index) =>(
                    <Services key = {service.id} service = {service} />
                ))}
            </FlexStyle>
        </Page>
        <Footer />
        </div>
    )
}

export default ShowServices
import React from "react"
import ServicesData from "./ServicesData"
import Services from "./Services"
import {FlexStyle} from "./Styles"
import Header from '../../components/modules/Header/Header'
import Footer from "../../components/modules/footer/footer"

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
            <FlexStyle>
                {ServicesData.map((service, index) =>(
                    <Services key = {service.id} service = {service} />
                ))}
            </FlexStyle>
            <Footer />
        </div>
    )
}

export default ShowServices
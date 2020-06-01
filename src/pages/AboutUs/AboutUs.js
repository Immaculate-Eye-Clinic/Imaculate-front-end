import React from 'react'
import Services from '../services/ShowServices'
import Header from '../../components/modules/Header/Header'

function AboutUs (){
    return(
        <div>
            <Header 
            bgcolor={'transparent'}
            title={'Visit Our Blogs'}
            subText={'Linda Ikeji still dey learn work'}
            height={'70vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <Services />
        </div>
    )
}

export default AboutUs
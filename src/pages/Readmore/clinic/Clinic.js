import React from 'react'
import Header from '../../../components/modules/Header/Header'

function Clinic(){
    return(
        <div>
            <Header 
            bgcolor={'transparent'}
            title={'About Us'}
            subText={'Get to Know More About Us'}
            height={'70vh'}
            mobileHeight={'50vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
        </div>
    )
}

export default Clinic
import React from 'react'

import Header from '../../components/modules/Header/Header'
import Navs from './Navs'


function Servicesblog() {
    return(
        <div>
            <Header 
            bgcolor={'transparent'}
            title={'Welcome Home'}
            subText={'Sub text goes here and this long'}
            height={'70vh'}
            mobileHeight={'50vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <Navs />
        </div>
    )
}

export default Servicesblog
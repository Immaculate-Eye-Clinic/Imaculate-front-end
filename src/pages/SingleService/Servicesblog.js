import React from 'react'

import Header from '../../components/modules/Header/Header'
import Navs from './Navs'
import Urgent from './Urgent/Urgent'
import Chalazion from './Chalazion/Chalazion'
import Cataract from './Cataract/Cataract'


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
            <Urgent />
            <Chalazion />
            <Cataract />
        </div>
    )
}

export default Servicesblog
import React from 'react'

import Header from '../../../components/modules/Header/Header'
import Navs from '../Navs'
import {Div} from './styled'

function Urgent() {
    return (
        <Div>
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
            <div className='body'>
                <div className='head'>
                    <p>How can we help?</p>
                    <h1>Treatment Of Urgent Eye Problems </h1>
                </div>
                <div className='op'>
                    <div className='text'>
                        <p>
                        wide variety of problems can affect the eye and surrounding structures. Ophthalmologists are qualified doctors who have special training in diagnosing and managing eye problems.
                        All our Ophthalmologists are experienced Consultants who are registered as Specialists in the UK.
                        Ask our friendly team about your eye problem. Whether it’s an urgent issue or something that has been nagging you for a while, we’ll do our level best to help.
                        </p>
                    </div>
                    <div className='image'>
                        <img src='/Asset/Img/urgent.jpg' alt='' />
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Urgent
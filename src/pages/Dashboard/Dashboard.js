import React from 'react'

import Profile from '../../components/modules/Profile/Profile'
import Taba from '../../components/modules/Tabs/Taba'
import {Div} from './styled'

import Footer from '../../components/modules/footer/footer'
import Navbar from '../../components/modules/navbar/navbar'

function Dashboard() {
    return (
        <Div>
            <Navbar 
            bgcolor='gray'
            />
            <div className='dash'>
                <div className='profile'>
                    <Profile />
                </div>
                <div className='tab'>
                    <Taba />
                </div>
            </div>
            <Footer />
        </Div>
    )
}

export default Dashboard
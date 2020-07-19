import React from 'react'

import Profile from '../../components/modules/Profile/Profile'
import Taba from '../../components/modules/Tabs/Taba'
import {Div} from './styled'

function Dashboard() {
    return (
        <Div>
            <div className='hi'>
                <Profile />
            </div>
            <div className='g'>
                <Taba />
            </div>
            
        </Div>
    )
}

export default Dashboard
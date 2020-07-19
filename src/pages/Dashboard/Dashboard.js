import React from 'react'

import Profile from '../../components/modules/Profile/Profile'
import Taba from '../../components/modules/Taba/Taba'
import {Div} from './styled'

function Dashboard() {
    return (
        <Div>
            <div>
                <Taba />
            </div>
        </Div>
    )
}

export default Dashboard
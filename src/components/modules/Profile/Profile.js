import React from 'react'
import {NavLink} from 'react-router-dom'

import {Div} from './styled'

function Profile() {
    return (
        <Div>
            <div className='image'>
            <img src = 'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1567505818/Startng/234_813_674_3132_20190810_223902_mc4hyc.jpg' alt = 'Doctor'></img>
            </div>
            <div>
                <h1>Justice</h1>
                <p>hhhshsh@gmail.com</p>
            </div>
            <div>
                <h1>Office Address</h1>
                <p>Immaculate Eye Clinic
                10 Owerri Street
                Nigeria
                W1G 9PF</p>
            </div>
            <div>
                <NavLink to='/post'><button>Post A Blog</button></NavLink>
            </div>
        </Div>
    )
}

export default Profile
import React from 'react'

import Navbar from './navbar/navbar'
import Hero from './hero/Hero'

function Header(props) {
    return (
        <div>
            <Navbar />
            <Hero 
            title={props.title}
            subText={props.subText}
            height={props.height}
            img={props.img}
            />
        </div>
    )
}

export default Header
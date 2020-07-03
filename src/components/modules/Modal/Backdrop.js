import React from 'react'
import {Divs} from './styled'

function Backdrop(props) {
    return (
        props.show ? <Divs onClick = {props.clicked}></Divs> : null
    )
}

export default Backdrop
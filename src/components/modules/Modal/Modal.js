import React from 'react'
import {Div} from './styled'

function Modal(props) {
    return (
        <Div>
            {props.children}
        </Div>
    )
}

export default Modal
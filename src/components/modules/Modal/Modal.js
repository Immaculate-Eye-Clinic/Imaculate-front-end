import React from 'react'
import {Div} from './styled'

function Modal(props) {
    return (
        <Div>
            <div>
                {props.children}
            </div>
        </Div>
    )
}

export default Modal
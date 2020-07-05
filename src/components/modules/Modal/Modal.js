import React from 'react'
import {Div} from './styled'
import Backdrop from './Backdrop'

function Modal(props) {
    return (
        <Div>
            <div>
                <Backdrop props={props.show} clicked={props.modalClosed}/>
                {props.children}
            </div>
        </Div>
    )
}

export default Modal
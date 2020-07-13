import React from 'react'
import {Div} from './styled'
import Backdrop from './Backdrop'

function Modal(props) {
    return (
        <Div style={{
            transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.show ? 1 : 0
        }}>
                <Backdrop props={props.show} clicked={props.modalClosed}/>
                {props.children}
        </Div>
    )
}

export default Modal
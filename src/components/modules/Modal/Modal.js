import React from 'react'
import {Div} from './styled'
import Backdrop from './Backdrop'

function Modal(props) {
    return (
        <Div>
            <div className='div' style={{
                transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? 1 : 0,
            }}>
                <Backdrop show={props.show} clicked={props.modalClosed}/>
                {props.children}
            </div>
        </Div>
    )
}

export default Modal
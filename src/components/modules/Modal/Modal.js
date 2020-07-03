import React from 'react'
import {Div} from './styled'
import classes from '*.module.css'

function Modal(props) {
    return (
        <Div>
            <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? 1 : 0
            }}
            >
                {props.children}
            </div>
        </Div>
    )
}

export default Modal
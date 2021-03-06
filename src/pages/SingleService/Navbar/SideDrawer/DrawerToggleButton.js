import React from 'react'
import {Div} from './styled'

function DrawerToggleButton(props) {
    return (
        <Div>
            <button onClick={props.click}>
                <div className='toggle-button_line' />
                <div className='toggle-button_line' />
                <div className='toggle-button_line' />
            </button>
        </Div>
    )
}

export default DrawerToggleButton
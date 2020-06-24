import React from 'react'
import {Button } from './BlogNavStyle'

function Drawerbutton(props){
    return(
        <Button onClick={props.click} >
            <div className='toggle-button' />
            <div className='toggle-button' />
            <div className='toggle-button' />
        </Button>
    )
}

export default Drawerbutton
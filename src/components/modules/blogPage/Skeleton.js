import React from 'react'
import {Skele} from './Styled'

function Skeleton(props) {
    return (
    <Skele>
        <div className='image'>
            
        </div>
        <div className='info'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    </Skele>
    )
}

export default Skeleton
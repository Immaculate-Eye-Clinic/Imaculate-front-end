import React from 'react'
import {Skele} from './Styled'

function Skeleton(props) {
    return (
    <Skele>
        <div className='image'>
            
        </div>
        <div className='info'>
            <div className='date'>
                
            </div>
            <div className='other'>

            </div>
        </div>
    </Skele>
    )
}

export default Skeleton
import React from 'react'
import {Body} from './IconStyle'

function New (props) {
    return (
        <Body>
            <div className='container'>
                <div className='card'>
                    <div className='imgBx' dataText={props.icon.h3}>
                    <img src={props.icon.imgUrl} alt="icon"/>
                    </div>
                    <div className='content'>
                        <div>
                            <h3>{props.icon.h3} </h3>
                            <p className='p'>{props.icon.p} </p>
                            <p className='p2'>{props.icon.caption} </p>
                        </div>

                    </div>
                </div>
            </div>
        </Body>
    )
}

export default New
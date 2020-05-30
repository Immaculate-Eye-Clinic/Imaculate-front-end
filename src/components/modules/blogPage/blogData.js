import React from 'react'
import {Body} from './Styled'

function BlogData(props) {
    return (
    <Body>
        <div className='image'>
        <img src={props.data.img} alt=''  width='60%' height='100%'/>
        </div>
        <div className='info'>
        <div className='date'>
        <img src={props.data.Calendar} alt='' width='4%' />
        <p className='p'>{props.data.date}</p>
        </div>
        <h2>{props.data.h3}</h2>
        <p>{props.data.p}</p>
        <a href='/'>{props.data.a}</a>
        </div>
    </Body>
    )
}

export default BlogData
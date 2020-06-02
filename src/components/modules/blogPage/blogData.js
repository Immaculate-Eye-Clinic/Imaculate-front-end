import React from 'react'
import {Body} from './Styled'

function BlogData(props) {
    return (
    <Body>
        <div className='image'>
        <img src='/Asset/Img/sunglasses.jpg' alt=''  width='60%' height='100%'/>
        </div>
        <div className='info'>
        <div className='date'>
        <img src='/Asset/Icon/Calendar.svg' alt='' width='4%' />
        <p className='p'>1st june 2020</p>
        </div>
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet, ius no enim vero expetendis.</p>
        <a href='/'>Read more</a>
        </div>
    </Body>
    )
}

export default BlogData
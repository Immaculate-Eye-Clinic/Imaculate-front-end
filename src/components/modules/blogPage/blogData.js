import React from 'react'
import {Body} from './Styled'

function BlogData(props) {
    return (
    <Body>
        <div className='image'>
        <img src='/Asset/Img/sunglasses.jpg' alt=''  width='300px' height='100%'/>
        </div>
        <div className='info'>
        <div className='date'>
        <img src='/Asset/Icon/Calendar.svg' alt='' width='4%' />
        <p className='p'>1st june 2020</p>
        </div>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>{props.title}</p>
        <a href='/'>Read more ></a>
        </div>
    </Body>
    )
}

export default BlogData
import React from 'react'
import {Cards} from './Style'
import {NavLink} from 'react-router-dom'

function BlogCard(props){
    return(
        <Cards imgUrl = {props.blog.imgUrl}>
            <div className='card'>
                <div className='caption_container'>
                </div>
                <div className = 'card_text'>
                    <div className='caption'>
                        {props.blog.caption}
                        <NavLink to={props.blog.link}><button>{props.blog.readMore}</button></NavLink>
                    </div>
                    
                </div>
                
            </div>
        </Cards>
    )
}

export default BlogCard

//<p>{props.blog.caption}</p>
//<img src={props.blog.imgUrl} alt="blog"/>
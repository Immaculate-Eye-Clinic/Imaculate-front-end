import React from 'react'
import {Div} from './Style'

function BlogCard(props){
    return(
        <Div>
            <div className='card'>
                <div className='card-image'><img src={props.blog.imgUrl} alt = ""/></div>


                <div className='card-text'>
                    <span className='date'>{props.blog.date}</span>
                    <h2>{props.blog.post}</h2>
                    <p> {props.blog.caption} </p>
                </div>


                <div className='button'>
                    <button>{props.blog.seeMore}</button>
                </div>
            </div>
        </Div>
    )
}

export default BlogCard

//<p>{props.blog.caption}</p>
//<img src={props.blog.imgUrl} alt="blog"/>
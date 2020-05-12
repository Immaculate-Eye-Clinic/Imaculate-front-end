import React from 'react'
import {Div} from './Style'

function BlogCard(props){
    return(
        <Div>
            <div className='card'>
                <div className='card-image'><img src={props.blog.imgUrl} /></div>


                <div className='card-text'>
                    <span className='date'>{props.blog.date}</span>
                    <h2>{props.blog.post}</h2>
                    <p> {props.blog.caption} </p>
                </div>


                <div className='card-stats'>
                    <div className='stat'>
                        <div className='value'> {props.blog.viewNumber} </div>
                        <div className='type'> {props.blog.read} </div>
                    </div>
                    <div className='stat border'>
                        <div className='value'> {props.blog.views} </div>
                        <div className='type'> {props.blog.viewsText} </div>
                    </div>
                    <div className='stat'>
                        <div className='value'> {props.blog.comment} </div>
                        <div className='type'> {props.blog.commentText} </div>
                    </div>
                </div>


            </div>
        </Div>
    )
}

export default BlogCard

//<p>{props.blog.caption}</p>
//<img src={props.blog.imgUrl} alt="blog"/>
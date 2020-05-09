import React from 'react'
import BlogList from '../../components/blogList/BlogList'
import IconList from '../../components/blogList/IconList'
import {Div, Div1, Div2} from './ArrayStyle'

function Array(){
    return(
        <div>
            <Div>
                <IconList 
                    imgUrl='/Asset/Img/health.jpg'
                    caption='First Aid Suggestions'/>
                <IconList 
                    imgUrl='/Asset/Img/book.jpg'
                    caption='Book an Appointment'/>
                <IconList 
                    imgUrl='/Asset/Img/doctor.jpg'
                    caption='Meet the Doctor'/>
            </Div><br/><br/>
            <Div1>
                <BlogList 
                    imgUrl='/Asset/Img/g.jpg'
                    caption='What you must know about Corona Virus'/><br/>
                <BlogList 
                    imgUrl='/Asset/Img/g.jpg'
                    caption='What you must know about Corona Virus'/><br/>
                <BlogList 
                    imgUrl='/Asset/Img/g.jpg'
                    caption='What you must know about Corona Virus'/>
                <BlogList 
                    imgUrl='/Asset/Img/g.jpg'
                    caption='What you must know about Corona Virus'/><br/>
                <BlogList 
                    imgUrl='/Asset/Img/g.jpg'
                    caption='What you must know about Corona Virus'/><br/>
                <BlogList 
                    imgUrl='/Asset/Img/g.jpg'
                    caption='What you must know about Corona Virus'/>
            </Div1>
        </div>
    )
}

export default Array
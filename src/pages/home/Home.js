import React from 'react';
import {Div, Div1, Div2} from './HomeStyle'
import Hero from  "../../components/modules/hero/Hero.js"
import Slider from "../../components/modules/PatientsComment/Slider"
import BlogList from '../../components/blogList/BlogList'
import IconList from '../../components/blogList/IconList'


function Home() {
    return (
        <div>
            <Hero />
            <Div>
                <IconList 
                    imgUrl='/Asset/Img/book.jpg'
                    caption='Book an Appointment'/>
                <IconList 
                    imgUrl='/Asset/Img/book.jpg'
                    caption='Book an Appointment'/>
                <IconList 
                    imgUrl='/Asset/Img/book.jpg'
                    caption='Book an Appointment'/>
            </Div>
            <Div1>
                <BlogList 
                    imgUrl='/Asset/Img/g.jpg'
                    caption='What you must know about Corona Virus'/><br/>
                <BlogList 
                    imgUrl='/Asset/Img/g.jpg'
                    caption='What you must know about Corona Virus'/>
            </Div1><br/><br/>
            <Div1>
                <BlogList 
                    imgUrl='/Asset/Img/g.jpg'
                    caption='What you must know about Corona Virus'/><br/>
                <BlogList 
                    imgUrl='/Asset/Img/g.jpg'
                    caption='What you must know about Corona Virus'/>
            </Div1>
            <Slider />
        </div>
    );
}

export default Home;

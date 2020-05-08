import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import Slider from "../../components/modules/PatientsComment/Slider"
import BlogList from '../../components/blogList/BlogList'
import IconList from '../../components/blogList/IconList'


function Home() {
    return (
        <div>
            <Hero />
            <div>
                <IconList 
                    imgUrl='/Asset/Img/book.jpg'
                    caption='Book an Appointment'/>
                <IconList 
                    imgUrl='/Asset/Img/book.jpg'
                    caption='Book an Appointment'/>
                <IconList 
                    imgUrl='/Asset/Img/book.jpg'
                    caption='Book an Appointment'/>
            </div>
            <BlogList 
                imgUrl='/Asset/Img/g.jpg'
                caption='What you must know about Corona Virus'
            /><br/>
            <Slider />
        </div>
    );
}

export default Home;

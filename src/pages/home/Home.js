import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import HomeIcon from '../../components/homeIcon/HomeIcon'
import Slider from "../../components/modules/PatientsComment/Slider"
import BlogCard from '../../components/blogCard/BlogCard'


function Home() {
    return (
        <div>
            <Hero />
            <HomeIcon 
                imgUrl='/Asset/Img/book.jpg' alt=""
                caption='Book an Appointment'
            />
            <Slider />
            <BlogCard 
                imgUrl='/Asset/Img/g.jpg'
                caption='What you must know about Corona Virus'
            />
        </div>
    );
}

export default Home;

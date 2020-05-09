import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import Slider from "../../components/modules/PatientsComment/Slider"
import BlogCard from '../../components/blogCard/BlogList'
import HomeIcon from '../../components/homeIcon/HomeIcon'

function Home() {
    
    return (
        <div>
            <Hero />
            <HomeIcon />
            <BlogCard />
            <Slider />
        </div>
    );
}

export default Home;

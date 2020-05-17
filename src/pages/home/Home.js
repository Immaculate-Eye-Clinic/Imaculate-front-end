import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import Slider from "../../components/modules/PatientsComment/Slider"
import BlogCard from '../../components/blogCard/BlogList'
import HomeIcon from '../../components/homeIcon/HomeIcon'
import Why from '../../components/modules/why_us/why_us'

function Home() {
    return (
        <div>
            <Hero 
                title={"Welcome Home"} 
                subText={"Sub text goes here and this long"} 
                height={"70vh"}
                img={"https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg"}
            />
            <HomeIcon />
            <BlogCard />
            <Slider />
            <Why />
        </div>
    );
}

export default Home;

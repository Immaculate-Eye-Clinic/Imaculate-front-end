import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import Slider from "../../components/modules/PatientsComment/Slider"
import BlogCard from '../../components/blogCard/BlogList'
import HomeIcon from '../../components/homeIcon/HomeIcon'

function Home() {
    return (
        <div>
            <Hero 
                title={"Welcome Home"} 
                subText={"Sub text goes here and this long"} 
                height={"80vh"}
                img={"https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg"}
            />
            <HomeIcon />
            <BlogCard />
            <Slider />
        </div>
    );
}

export default Home;

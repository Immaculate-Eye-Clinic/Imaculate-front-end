import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import Slider from "../../components/modules/PatientsComment/Slider"
import Array from '../../components/blogList/Arrary'


function Home() {
    return (
        <div>
            <Hero />
            <Array />
            <Slider />
        </div>
    );
}

export default Home;

import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import HomeIcon from '../../components/homeIcon/HomeIcon'
import Slider from "../../components/modules/PatientsComment/Slider"


function Home() {
    return (
        <div style={{width: "100%"}}>
            <Hero />
            <HomeIcon 
                imgUrl='/Asset/Img/book.jpg' alt=""
                caption='Book an Appointment'
            />
            <Slider />
        </div>
    );
}

export default Home;

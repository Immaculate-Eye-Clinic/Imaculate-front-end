import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import HomeIcon from '../../components/homeIcon/HomeIcon'
import Slider from "../../components/modules/PatientsComment/Slider"


function Home() {
    return (
        <div style={{width: "100%"}}>
            <Hero 
                title={"Welcome Home"} 
                subText={"Sub text goes here and this long"} 
                height={"90vh"}
                img={"https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg"}
            />
            <HomeIcon 
                imgUrl='/Asset/Img/book.jpg' alt=""
                caption='Book an Appointment'
            />
            <Slider />
        </div>
    );
}

export default Home;

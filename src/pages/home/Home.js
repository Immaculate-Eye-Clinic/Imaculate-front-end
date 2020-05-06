import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import HomeIcon from '../../components/homeIcon/HomeIcon'


function Home() {
    return (
        <div>
            <Hero />
            <HomeIcon 
                imgUrl='/Asset/Img/book.jpg'
                caption='Book an Appointment'
            />
        </div>
    );
}

export default Home;

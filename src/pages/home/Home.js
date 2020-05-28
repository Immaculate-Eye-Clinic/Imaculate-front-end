import React from 'react';

import Hero from  "../../components/modules/hero/Hero.js"
import Slider from "../../components/modules/PatientsComment/Slider"
import BlogCard from '../../components/blogCard/BlogList'
import HomeIcon from '../../components/homeIcon/HomeIcon'
import Why from '../../components/modules/why_us/why_us'
import Header from '../../components/modules/Header/Header'
import { red } from 'color-name';
import WelcomeText from '../../components/welcomeText/WelcomeText.js';
import Footer from '../../components/modules/footer/footer'

function Home() {
    return (
        <div>
            <Header 
            bgcolor={'transparent'}
            title={'Welcome Home'}
            subText={'Sub text goes here and this long'}
            height={'70vh'}
            mobileHeight={'50vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <WelcomeText />
            <div style={{width: "90%", margin: "auto"}}>
            
            <BlogCard />
            </div>
            <Slider />
            <Why />
            <Footer />
        </div>
    );
}

export default Home;

import React from 'react';
import BlogCard from '../../components/blogCard/BlogList';
import Why from '../../components/modules/why_us/why_us';
import Header from '../../components/modules/Header/Header';
import WelcomeText from '../../components/welcomeText/WelcomeText.js';
import Footer from '../../components/modules/footer/footer'
import MidSection from '../../components/modules/middle-section/MidSection'

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
            <MidSection />
            <Why />
            <Footer />
        </div>
    );
}

export default Home;

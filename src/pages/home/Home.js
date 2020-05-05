import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import {GlobalStyle} from "../../GlobalStyle.js"

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Hello dear world</p>
            <Hero />
            <GlobalStyle />
        </div>
    );
}

export default Home;

import React from 'react';
import Hero from  "../../components/modules/hero/Hero.js"
import Slider from "../../components/modules/PatientsComment/Slider"
import BlogList from '../../components/blogList/BlogList'
import IconList from '../../components/blogList/IconList'
import IconData from '../../components/blogList/IconData'
import BlogData from '../../components/blogList/BlogData'
import {Div, Div1} from '../../components/blogList/ComponentStyle'

function Home() {
    const IconComponent = IconData.map(icon => <IconList key={icon.id} icon ={icon}/>)
    const BlogComponent = BlogData.map(blog => <BlogList key={blog.id} blog={blog}/>)
    
    return (
        <div>
            <Hero />
            <Div>{IconComponent}</Div>
            <Div1>{BlogComponent}</Div1>
            <Slider />
        </div>
    );
}

export default Home;

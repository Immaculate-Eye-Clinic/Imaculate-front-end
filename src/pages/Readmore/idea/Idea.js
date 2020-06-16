import React from 'react'
import Header from '../../../components/modules/Header/Header'
import BlogNav from '../blogNav/BlogNav'
import {Div } from './IdeaStyle'

function Idea(){
    return(
        <Div>
            <Header 
            bgcolor={'transparent'}
            title={'Idea'}
            subText={'Get to Know More About our Ideas'}
            height={'70vh'}
            mobileHeight={'50vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <BlogNav />
        </Div>
    )
}

export default Idea
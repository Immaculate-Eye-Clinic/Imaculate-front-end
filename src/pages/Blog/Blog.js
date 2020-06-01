import React from 'react'

import BlogPage from '../../components/modules/blogPage/blogPage'
import Header from '../../components/modules/Header/Header'

function Blog() {
    return (
        <div>
            <Header 
            bgcolor={'transparent'}
            title={'Visit Our Blogs'}
            subText={'Linda Ikeji still dey learn work'}
            height={'70vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <BlogPage />
        </div>
    )
}

export default Blog
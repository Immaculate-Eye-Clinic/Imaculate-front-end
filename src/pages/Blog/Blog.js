import React, {useState, useEffect} from 'react'

import BlogPage from '../../components/modules/blogPage/blogPage'
import Header from '../../components/modules/Header/Header'
import Posts from './Posts'

function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost * postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

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
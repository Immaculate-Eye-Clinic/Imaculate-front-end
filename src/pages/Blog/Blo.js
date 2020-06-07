{/*import React, {useState, useEffect} from 'react'
import axios from 'axios';

import Category from './Cat'
import Header from '../../components/modules/Header/Header'
import Pagination from './Pagination'
import Posts from './Posts'


    

function Blo() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https:/jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
        
    }, []);
    console.log(posts)

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

   

    return (
        <div>
             <Header 
            bgcolor={'transparent'}
            title={'Visit Our Blogs'}
            subText={'Linda Ikeji still dey learn work'}
            height={'70vh'}
            img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
            />
            <Category />
            
            <h1 style={{color: '#252079'}}>Blog in Spanish</h1>
            <Posts posts={currentPosts} loading={loading} /> 
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />         
        </div>
    )
}
           


export default Blo*/}
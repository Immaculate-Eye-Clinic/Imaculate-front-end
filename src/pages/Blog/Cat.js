import React from 'react'
import {NavLink} from 'react-router-dom'
import {Cate} from './styled'

function Category() {
    return (
        <Cate>
            <div className='category'>
                <div className='head'>
                <strong>Category</strong>
                </div>
                <div className='body'>
                <p><NavLink to='/blog'>Blog</NavLink></p>
                <p><NavLink to='/'>Eye Care</NavLink></p>
                <p><NavLink to='/'>Red Eyes</NavLink></p>
                </div>
            </div><br />
            <div className='archive'>
                <div className='head'>
                    <strong>Archive</strong>
                </div>
                <div className='body'>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p>
                <p><NavLink to='/'>October 2019</NavLink></p> 
                </div>
            </div>
        </Cate>
    )
}

export default Category
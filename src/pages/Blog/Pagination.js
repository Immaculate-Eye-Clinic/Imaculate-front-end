import React from 'react'
import {Ul} from './styled'

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil (totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="!#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
import React from 'react'
import {Ula} from './styled'

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil (totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <Ula>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button>
                        <a onClick={() => paginate(number)} href="#">
                            {number}
                        </a>
                        </button>
                    </li>
                ))}
            </Ula>
        </nav>
    )
}

export default Pagination
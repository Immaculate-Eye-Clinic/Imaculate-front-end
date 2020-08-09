import styled from 'styled-components'

export const Post = styled.div `
background: whitesmoke;
.main {
    width: 80%;
    text-align: center;
    position: relative;
    left: 10%;
    background: white;
    .blog {
        .drop {
            width: 50%;
            position: relative;
            left: 24%;
            @media (max-width: 1010px) {
                width: 80%;
                left: 10%;
            }
            @media (max-width: 640px) {
                width: 100%;
                left: 0;
            }
}
    }
}

`
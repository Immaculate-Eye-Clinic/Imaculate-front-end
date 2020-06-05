import styled from 'styled-components'

export const Div = styled.div `
ul {list-style: none;
width: 50%;
margin: 0;
li {
    border: 1px solid #c0c0c0;
    padding: 15px 0;
    padding-right: 15px;
}
}
`

export const Ula = styled.ul `
list-style: none;
display: flex;
position: relative;
align-items: center;
li {
    border: 1px solid #c0c0c0;
    padding: 8px 15px;
    :hover,
    :focus {
        outline: 2px solid #252079;
        border: 1px solid #252079;
    }
}
a {
    text-decoration: none;
}
`

export const Cate = styled.div `
display: flex;
width: 50%;
position: relative;
top: 1.7%;
left: 16%;
bottom: 0;
flex-direction: column;
text-align: center;
@media (max-width: 1270px) {
  right: 0;  
}
@media (max-width: 1000px) {
  display: none; 
}
.head {
    background-color: #252079;
    padding: 19px 0;
    font-size: 14px;
    color: white;
    text-align: left;
    strong {
        margin-left: 14px;
    }
}
.body {
    background: silver;
    padding-top: 6px;
    padding-bottom: 8px;
    text-align: left;
    a {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
    margin-left: 2px;
}
}
.category {

}
`

export const Main = styled.div`

.posts {
    display: grid;
    grid-template-columns: 70% 30%;
    margin-top: 5em;
    .post {
        margin-bottom: 4em;
    }
}
`
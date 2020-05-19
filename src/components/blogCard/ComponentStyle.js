import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 80%;

`
export const Div1 = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
    .title {
        font-size: 40px;
        font-weight: 1000;
        text-align: center;
        margin-bottom: 60px;
        color: #252079;
    }
    .scrolling_wrapper {
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        .container {
        display: flex;
        flex-direction: row;
        flex-wrap: no_wrap;
        justify-content: space-evenly;
        width: 100%;
        @media (max-width: 760px){
            display: flex;
            flex-direction: row;
            flex-wrap: no_wrap;
            justify-content: space-between;
        }
    }
    
    }
    .butContianer {
        width: 150px;
        margin: 70px auto;
        .but{
            border: none;
            width: 150px;
            margin: auto;
            color: white;
            background: #252079;
            padding: 10px 22px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 13px;
            border-radius: 10px;
            cursor: pointer;
            @media (max-width: 760px){
                font-size: 8px;
                padding: 8px 15px;
            }
        }
    }

    
`
// export const Mobile_Div = styled.div`
//     margin-top: 100px;
//     margin-bottom: 100px;
//     @media (max-width: 760px){
//             display: block;
//     }
//     @media (min-width: 760px){
//         display: none;
//     }
//     .title {
//         font-size: 40px;
//         font-weight: 1000;
//         text-align: center;
//         margin-bottom: 60px;
//         color: #252079;
//     }
//     .container {
//         display: flex;
//         flex-direction: row;
//         flex-wrap: wrap;
//         justify-content: space-evenly;
//         width: 100%;
//         @media (max-width: 760px){
//             display: flex;
//             flex-direction: row;
//             flex-wrap: wrap;
//             justify-content: space-between;
//         }
//     }
//     .butContianer {
//         width: 150px;
//         margin: 70px auto;
//         .but{
//             border: none;
//             width: 150px;
//             margin: auto;
//             color: white;
//             background: #252079;
//             padding: 10px 22px;
//             text-align: center;
//             text-decoration: none;
//             display: inline-block;
//             font-size: 13px;
//             border-radius: 10px;
//             cursor: pointer;
//             @media (max-width: 760px){
//                 font-size: 8px;
//                 padding: 8px 15px;
//             }
//         }
//     }
// `

export const Divs = styled.div `
position: relative;
width: 1000px;
justify-content: center;
flex-direction: row;
display: flex;
margin-top: 17em;

// @media (max-width: 992px){
//     width: 50%;
   
//     margin-left: 11em;
// }


// @media (max-width: 760px){
//     width: 50%;
    
//     margin-left: 20em;
// }


`

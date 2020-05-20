import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
background: grey;
margin: 0;
padding: 0;
height: 100vh;

.container{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.container .img img{
    width: 500px;
}

.container .img{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.box{
    position: absolute;
    
    margin: 10px;
    padding: 10px;
    width: 360px;
    height: 580px;
    top: 50%;
    left: 70%;
    transform: translate(-50%,-50%);
    border-radius: 20px;
    box-sizing: border-box;
}

.box h1{
    padding: 0 0 15px;
    margin: 15px;
    font-size: 45px;
    color: white;
    text-align: center;
    letter-spacing: 2px;
    user-select: none;
}

.box .inputbox{
    position: relative;
    top: 0;
    margin: 20px 0 30px;
}


.box .inputbox input,
.box .inputbox button{
    padding: 0 25px;
    margin: 0;
    width: 100%;
    height: 35px;
    background: transparent;
    font-size: 20px;
    outline: none;
    letter-spacing: 1px;
    color: #fffab5;
    border: #ffffcl 2px solid;
    box-sizing: border-box;
    border-radius: 20px;
}

.box .inputbox label{
    position: absolute;
    margin: 0;
    padding: 0;
    top: 7px;
    left: 35px;
    font-size: 20px;
    color: #ffcb76cb;
    letter-spacing: 1px;
    pointer-events: none;
    transition: .2s;
}

.box .inputbox input:focus ~ label,
.box .inputbox input:valid ~ label{
    top: -25px;
    left: 5px;
    color: #becdff;
    font-size: 18px;
}

.box .inputbox button{
    position: absolute;
    margin: 0;
    padding: 0;
    top: 30px;
    left: 50%;
    width: 90%;
    height: 40px;
    transform: translate(-50%,-50%);
    font-size: 16px;
    color: #d5ebff;
    border-color: #d5ebff;
    outline: none;
    cursor: pointer;
    transition: .1s;
}

.box .inputbox button: hover{
    width: 95%;
    height: 45px;
    font-size: 18px;
    background: #f1ccff25;
    font-weight: bold;
}
`
import React from 'react'
import {Div} from './Styled'
import {NavLink} from 'react-router-dom'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            Username: '',
            Password: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Div>
                
<div className='div'>
                   <div className='img'>
                        <img src='/Asset/Icon/Personalization.svg' alt='' />
                   </div>
                   <div className='login-container'>
                   <div className='box'>
                    <h1>LOGIN</h1>  

                    <form action='#'>
                        <div className='inputbox'>
                               <input name='Username'
                                type='text'
                                value={this.state.Username} 
                                onChange={this.handleChange} required/>
                                <label>E-mail</label>
                        </div>
                        <div className='inputbox'>
                               <input name='Password'
                                type='password'
                                value={this.state.Password} 
                                onChange={this.handleChange} required/>
                                <label>Password</label>
                        </div>
                        <div className='inputbox'>
                            <button>Login</button>
                        </div>
                    </form>
                    <a><NavLink to='/signup'>Don't Have An Account?</NavLink></a><br />
                    <a><NavLink to='/'>Forgot My Password</NavLink></a>
                </div>   
                   </div>
                </div>
            </Div>
        )
    }
}

{/*

form {
    width: 360px;
}

.avatar {
    width: 30%;
}

.pic {
    width: 70%;
}

form h2 {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin: 15px 0;
    color: #333;
}

.input-div {
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
}

.input-div.one {
    margin-top: 0;
}

.input-div.two {
    margin-bottom: 4px;
}

.i {
    display: flex;
    justify-content: center;
    align-items: center;
}

.i i{
    color: #d9d9d9;
    margin-top: 5px;
}

.input-div > div {
    position: relative;
    height: 45px;
}


.input-div.focus .i i{
    color: blue;
}

.input-div.focus div .h5 {
top: -9px;
font-size: 12px;
}

.input-div div h5 {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 18px;
    transition: .3s;
    margin-top: 2em;
}

input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    color: #fff;
}

a {
    display: block;
    text-align: right;
    text-decoration: none;
    color: #999;
    font-size: 0.9rem;
    transition: .3s;
    :hover {
        color: #252079;
    }
}

button {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    margin: 1rem 0;
    font-size: 1.2rem;
    outline: none;
    border: none;
    background: linear-gradient(to right, #252079, #252052, #252079) ;
    color: white;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    background-size: 200%;
    transition: .5s;

    :hover {
        background-position: right;
    }
}


*/}

{/* 
 <form>
                            <img src='/Asset/Icon/Profile.svg' className='avatar' />
                            <h2>Welcome</h2>
                               <div className='input-div one focus'>
                                <div className='i'>
                                    <i className='fas fa-user'>
                                    <img src='/Asset/Icon/User.svg' /> 
                                    </i>
                                </div>
                                <div>
                                   
                                    <h5 className='h5'>Username</h5>
                                    <input name='Username'
                                     type='text'
                                     value={this.state.Username} 
                                     onChange={this.handleChange}/>
                                </div>
                             </div>
                             <div className='input-div two focus'>
                                <div className='i'>
                                    <i className='fas fa-lock'>
                                    <img src='/Asset/Icon/Password.svg' className='pic'/> 
                                    </i>
                                </div>
                                
                                <div>
                                <label>
                                  
                                    <h5 className='h5'>Password</h5>
                                    <input name='Password'
                                     type='password'
                                     value={this.state.Password} 
                                     onChange={this.handleChange}/>
                                </label>
                                </div>
                                </div>
                                <a href='/'>Forgot Password?</a>
                                <button className='btn'>Login</button>
                        </form>

*/}

{/*

*/}

export default Login
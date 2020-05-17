import React from 'react'
import {Div} from './Styled'

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
                   </div>
                </div>

                
            </Div>
        )
    }
}

export default Login
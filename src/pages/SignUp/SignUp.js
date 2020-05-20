import React from 'react'
import {Div} from './Styled'

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <Div>
                <div className='container'>
                    <div className='img'>
                        <img src='/Asset/Img/phone.svg'/>
                    </div>
                    <div className='box'>
                        <h1>SIGNUP</h1>
                        <form action='#'>
                            <div class='inputbox'>
                                <input type='text' required />
                                <label>First Name</label>
                            </div>

                            <div class='inputbox'>
                                <input type='text' required />
                                <label>Last Name</label>
                            </div>

                            <div class='inputbox'>
                                <input type='email' required />
                                <label>Email Address</label>
                            </div>

                            <div class='inputbox'>
                                <input type='text' required />
                                <label>Username</label>
                            </div>

                            <div class='inputbox'>
                                <input type='password' required />
                                <label>Password</label>
                            </div>

                            <div class='inputbox'>
                                <input type='text' required />
                                <label>Code</label>
                            </div>

                            <div class='inputbox'>
                                <button>SIGN UP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Div>
        )
    }
}

export default SignUp
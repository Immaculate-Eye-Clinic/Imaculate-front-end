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
                <div>
                    <div className='container'>
                        <div className='phone'>
                            <img src='/Asset/Img/phone.svg' />
                        </div>
                        <div className='sign-up'>
                            <form>
                                <img src='/Asset/Img/avatar.svg' />
                                <h2>Welcome</h2>
                                <div className='input-div'>
                                    <span>
                                        <h5>First Name</h5>
                                        <input type='text' placeholder='First Name' />
                                    </span>
                                    <span>
                                        <h5>Last Name</h5>
                                        <input type='text' placeholder='Last Name'/>
                                    </span>
                                    <span>
                                        <h5>Email Address</h5>
                                        <input type='email' placeholder='Email Address' />
                                    </span>
                                    <span>
                                        <h5>Username</h5>
                                        <input type='text' placeholder='Username'/>
                                    </span>
                                    <span>
                                        <h5>Password</h5>
                                        <input type='text' placeholder='Password' />
                                    </span>
                                    <span>
                                        <h5>Code</h5>
                                        <input type='text' placeholder='Code'/>
                                    </span>
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Div>
        )
    }
}

export default SignUp
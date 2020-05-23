import React from 'react'
import {Div} from './Styled'
import {NavLink} from 'react-router-dom'

import {Formik, useField, Form} from 'formik'
import * as Yup from 'yup'

const CustomTextInput = ({ label, ...props }) => {
    const[field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'> {meta.error} </div>
            ): null}
        </>
    )
}

function Login() {

        return (
            <Div>
                <Formik
                 initialValues={{
                     email: '',
                     password: ''
                 }}
                 validationSchema={Yup.object({
                     email: Yup.string()
                     .email('invalid email address')
                     .required(''), 
                     password: Yup.string()
                     .min(4)
                     .max(12)
                     .matches('^(?=.*[a-z])(?=.*[A-Z](?=.*d)[a-zA-Zd]$')
                     .required('')
                 })}
                onSubmit={(values, { setSubmitting, resetForm}) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      resetForm();
                      setSubmitting(false);
                    }, 3000)
                 }}
                >
                    {props => (
                        <Form>

                        <div className='div'>
                   <div className='img'>
                        <img src='/Asset/Icon/Personalization.svg' alt='' />
                   </div>
                   <div className='login-container'>
                   <div className='box'>
                    <h1>LOGIN</h1>  

                    <form action='#'>
                        <div className='inputbox'>
                        <CustomTextInput  name='email' type='email' required/>
                        <label>E-mail</label>
                        </div>
                        <div className='inputbox'>
                        <CustomTextInput  name='password' type='password' required/>
                        <label>Password</label>
                        </div>
                        <div className='inputbox'>
                            <button className='button'>Login</button>
                        </div>
                    </form>
                    <a><NavLink to='/signup'>Don't Have An Account?</NavLink></a><br />
                    <a className='a'><NavLink to='/'>Forgot My Password</NavLink></a>
                </div>   
                   </div>
                </div>
                        </Form>
                    )}
                </Formik>

                
            </Div>
        )
    }


{/*
<div className='div'>
                   <div className='img'>
                        <img src='/Asset/Icon/Personalization.svg' alt='' />
                   </div>
                   <div className='login-container'>
                   <div className='box'>
                    <h1>LOGIN</h1>  

                    <form action='#'>
                        <div className='inputbox'>
                               <input name='Email'
                                type='email'
                                value={this.state.Email} 
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
                            <button className='button'>Login</button>
                        </div>
                    </form>
                    <a><NavLink to='/signup'>Don't Have An Account?</NavLink></a><br />
                    <a className='a'><NavLink to='/'>Forgot My Password</NavLink></a>
                </div>   
                   </div>
                </div>

*/}

export default Login
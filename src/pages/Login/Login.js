import React from 'react'
import {Div} from './Styled'
import {NavLink} from 'react-router-dom'

import {Formik, useField, Form} from 'formik'
import * as Yup from 'yup'

import Navbar from '../../components/modules/navbar/navbar'

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
                     .min(4,)
                     .max(12)
                     .matches('^(?=.*[a-z])(?=.*[A-Z](?=.*d)[a-zA-Zd]$')
                     .required('')
                 })}
                onSubmit={(values, { setSubmitting, resetForm}) => {
                    setTimeout(() => {
                      console.log(JSON.stringify(values, null, 2));
                      resetForm();
                      setSubmitting(false);
                    }, 3000)
                 }}
                >
                    {props => (
                        <Form>
                        <Navbar 
                        bgcolor={'#252079'}
                        />

                        <div className='div'>
                   <div className='img'>
                        <img src='/Asset/Icon/Personalization.svg' alt='' />
                   </div>
                   <div className='login-container'>
                   <div className='box'>
                    <h1>LOGIN</h1>
                    <div>  
                        <div className='inputbox'>
                        <CustomTextInput  name='email' type='text' required/>
                        <label>E-mail</label>
                        </div>
                        <div className='inputbox'>
                        <CustomTextInput  name='password' type='password' required/>
                        <label>Password</label>
                        </div>
                        <div className='inputbox'>
                         <button type='submit' className='button'>{ props.isSubmitting ? 'Loading...' : 'Login' }</button>
                         </div>
                        </div>
                        <div className='a'>
                    <NavLink to='/signup' className='nav'>Don't Have An Account?</NavLink>
                    <NavLink to='/' className='nav'>Forgot My Password</NavLink>
                    </div>
                </div>   
                   </div>
                </div>
                        </Form>
                    )}
                </Formik>

                
            </Div>
        )
    }


export default Login
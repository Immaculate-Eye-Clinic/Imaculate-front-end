import React from 'react'
import {Div} from './Styled'
import {NavLink} from 'react-router-dom'
import Header from '../../components/modules/Header/Header'

import {Formik, useField, Form} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

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


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.change = this.change.bind(this)
    }

    change(e){
        const {name, value} = e.target
      this.setState({
          [name]: value
      })
    }
    handleSubmit = e => {
        e.preventDefault();


        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('https://gentle-cove-39195.herokuapp.com/user/login', data)
            .then(res => {
                console.log(res)
            })
            .catch (err => {
                console.log(err)
            })
    }
    render() {
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
                        <Header 
                            bgcolor={'rgba(0,0,0,0.5)'}
                            mobileHeight="0px"
                            height={'0px'}
                        />

                        <form className='div' onSubmit={this.handleSubmit}>
                   <div className='img'>
                        <img src='/Asset/Icon/Personalization.svg' alt='' />
                   </div>
                   <div className='login-container'>
                   <div className='box'>
                    <h1>LOGIN</h1>
                    <div>  
                        <div className='inputbox'>
                        <CustomTextInput  name='email' type='text' value={this.state.email} onChange={this.change} required/>
                        <label>E-mail</label>
                        </div>
                        <div className='inputbox'>
                        <CustomTextInput  name='password' type='password' value={this.state.password} onChange={this.change} required/>
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
                </form>
                        </Form>
                    )}
                </Formik>

                
            </Div>
        )
    }

}
export default Login
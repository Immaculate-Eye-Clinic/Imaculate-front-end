import React from 'react'
import Header from '../../components/modules/Header/Header'
import {Div} from './Styled'
import {Formik, useField, Form} from 'formik'
import * as Yup from 'yup'
import Navbar from '../../components/modules/navbar/navbar'


const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return(
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ): null}
        </>
    )
}

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <Div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        user: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .min(3, 'Must be at least 3 characters')
                            .max(15, 'Must be 15 characters or less')
                            .required(''),

                        lastName: Yup.string()
                            .min(3, 'Must be at least 3 characters')
                            .max(15, 'Must be 15 characters or less')
                            .required(''),

                        email: Yup.string()
                            .email('Invalid email address')
                            .required(''),

                        password: Yup.string()
                            .required('')
                            .min(4, 'Seems a bit short...')
                            .max(15, 'Try a shorter password')
                            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).*$/, {
                                message: 'Password needs to contain 1 uppercase character(A-Z), 1 lowercase character(a-z) and 1 digit(0-9)'
                            }),

                        confirmPassword: Yup.string()
                            .required('')
                            .oneOf([Yup.ref('password')], 'Password must match'),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values.null, 2))
                            resetForm()
                            setSubmitting(false)
                        }, 3000)
                    }}>

                    {props => (    
                    <Form>
                        <Header 
                        bgcolor={'rgba(0,0,0,0.5)'}
                        mobileHeight="0px"
                        height={'0px'}
                        />
                        
                        <div className='container'>
                            <div className='img'>
                                <img src='/Asset/Img/phone.svg'/>
                            </div>
                            <div className='box'>
                                <h1>SIGNUP</h1>
                                <form action='#'>
                                    <div class='inputbox'>
                                        <CustomTextInput type='text' name='firstName' required />
                                        <label>First Name</label>
                                    </div>

                                    <div class='inputbox'>
                                        <CustomTextInput type='text' name='lastName' required />
                                        <label>Last Name</label>
                                    </div>

                                    <div class='inputbox'>
                                        <CustomTextInput type='text' name='email' required />
                                        <label>Email Address</label>
                                    </div>

                                    <div class='inputbox'>
                                        <CustomTextInput type='password' name='password' required />
                                        <label>Password</label>
                                    </div>

                                    <div class='inputbox'>
                                        <CustomTextInput type='password' name='confirmPassword' required />
                                        <label>Confirm Password</label>
                                    </div>

                                    <div class='inputbox'>
                                        <button className='button' type='submit'>SIGNUP</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Form>
                    )}
                </Formik>
                <div className="space"></div>
            </Div>

        )
    }
}

export default SignUp
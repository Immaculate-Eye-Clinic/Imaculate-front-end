import React from 'react'
import {Div} from './Styled'
import {Formik, useField, Form} from 'formik'
import * as Yup from 'yup'


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

                        user: Yup.string()
                            .min(4, 'Too Short')
                            .max(15, 'Too Long')
                            .required('')
                            .matches(/^[\w-.@ ]+$/, {
                                message: 'Incorrect carector'
                            }),

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
                    }}
                >
                    <Form>
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
                                        <CustomTextInput type='email' name='email' required />
                                        <label>Email Address</label>
                                    </div>

                                    <div class='inputbox'>
                                        <CustomTextInput type='text' name='user' required />
                                        <label>Username</label>
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
                                        <button className='button' type='submit'>{this.props.isSubmitting ? 'Loading...' : 'SIGNUP'} </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </Div>

        )
    }
}

export default SignUp
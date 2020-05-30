import React from 'react'
import {Div } from './ContactStyle'

class Contact extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <Div>
                <div className='body'>
                    <div className='div'>
                        <h3><i>We'd love to hear from you</i></h3>
                        <h1>Contact Us</h1>
                        <p>Do you have an enquiry? Or simply want to find out more about us?<br/> Feel free to get in touch, we'd love to hear from you!</p>
                        <h2 className='number'>+ 0800 000 0000</h2>
                        <h2 className='info'>+ info@immaculate.com</h2>
                        <form>
                            <h3><i>Request a call back</i></h3>
                            <input type='text' placeholder='Your Name*' className='name' /><br/><br/>
                            <input type='email' placeholder='Email Address*' className='email' />
                            <input type='number' placeholder='Phone Number*' className='phone' /><br/><br/>
                            <input type='text' placeholder='Subject*' className='subject' /><br/><br/>
                            <textarea type='text' placeholder='Message*' /><br/>
                            <div className='below'>
                                <p className='p'>By submitting this form you confirm that<br/> you’re happy for us to contact you by phone,<br/> messaging and email.</p>
                                <button>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='img'>
                    <img src='\Asset\Img\EyeCareBackground.jpg' />
                </div>
            </Div>
        )
    }
}
    


export default Contact
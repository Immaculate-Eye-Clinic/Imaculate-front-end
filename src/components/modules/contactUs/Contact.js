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
                        <p className='p1'>Do you have an enquiry? Or simply want to find out more about us? Feel free to get in touch, we'd love to hear from you!</p>
                        <div className='info'>
                            <h2 className='number'>+ 0800 000 0000</h2>
                            <h2>+ info@immaculate.com</h2>
                        </div>
                        <form>
                            <h3><i>Request a call back</i></h3>
                            <input type='text' placeholder='Your Name*' className='name' /><br/><br/>
                            <div className='div1'>
                                <input type='email' placeholder='Email Address*' className='email' /><br/><br/>
                                <input type='number' placeholder='Phone Number*' className='phone' /><br/><br/>
                            </div>
                            <input type='text' placeholder='Subject*' className='subject' /><br/><br/>
                            <textarea type='text' placeholder='Message*' /><br/>
                            <span className='below'>
                                <span><p className='p'>By submitting this form you confirm that you’re happy for us to contact you by phone, messaging and email.</p></span>
                                <span><button>Send Message</button></span>
                            </span>
                        </form>
                    </div>
                </div>
                <div className='img'>
                    <img src='\Asset\Img\EyeCareBackground.jpg' />
                    <img src='\Asset\Img\g.jpg' />
                    <img src='\Asset\Img\EyeCareBackground.jpg' />
                </div>
            </Div>
        )
    }
}
    


export default Contact
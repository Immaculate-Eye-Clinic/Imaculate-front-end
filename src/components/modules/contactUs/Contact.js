import React from 'react'
import {Div } from './ContactStyle'

class Contact extends React.Component{
    constructor(){
        super()
        this.state = {
            text: '',
            email: '',
            subject: '',
            number: '',
        }
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }


    change(e){
        // const {name, value} = e.target
        // this.setState ({
        //     [name] : e.target.value
        // })
    }

    // submit(e){
    //     e.preventDefault()
        
    //     const user = {
    //         text: this.state.text,
    //         email: this.state.email,
    //         number: this.state.number,
    //         subject: this.state.subject,
    //         message: this.state.message,
    //     }

    //     fetch('https://jsonplaceholder.typicode.com/users', {
    //         method: 'POST',
    //         contacts: {
    //             'content-type': 'application/json'
    //         },
    //         text: JSON.stringify(user),
    //         email: JSON.stringify(user),
    //         number: JSON.stringify(user),
    //         subject: JSON.stringify(user),
    //         number: JSON.stringify(user),
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // }

    render(){
        return(
            <Div>
                {/* <div className='main'>
                    <div className='body'>
                        <div className='div'>
                            <h3><i>We'd love to hear from you</i></h3>
                            <h1>Contact Us</h1>
                            <p className='p1'>Do you have an enquiry? Or simply want to find out more about us? Feel free to get in touch, we'd love to hear from you!</p>
                            <div className='info'>
                                <h2 className='number'>+ 0800 000 0000</h2>
                                <h2>+ info@immaculate.com</h2>
                            </div>
                            <form onSubmit={this.submit}>
                                <h3><i>Request a call back</i></h3>
                                <input 
                                    type='text' 
                                    placeholder='Your Name*' 
                                    className='name' 
                                    name='text'
                                    value={this.state.text}
                                    onChange={this.change}
                                    required 
                                /><br/><br/>
                                <div className='div1'>
                                    <input 
                                        type='email' 
                                        placeholder='Email Address*' 
                                        className='email'
                                        name='email' 
                                        value={this.state.email}
                                        onChange={this.change}
                                        required
                                    /><br/><br/>
                                    <input 
                                        type='number' 
                                        placeholder='Phone Number*' 
                                        className='phone'
                                        name='number'
                                        value={this.state.number} 
                                        onChange={this.change}
                                        required
                                    /><br/><br/>
                                </div>
                                <input 
                                    type='text' 
                                    placeholder='Subject*' 
                                    className='subject' 
                                    name='subject'
                                    value={this.state.subject}
                                    onChange={this.change}
                                    required
                                /><br/><br/>
                                <textarea 
                                    type='text' 
                                    placeholder='Message*' 
                                    name='message'
                                    value={this.state.message}
                                    onChange={this.change}
                                /><br/>
                                <div className='below'>
                                    <div><p className='p'>By submitting this form you confirm that you’re happy for us to contact you by phone, messaging and email.</p></div>
                                    <div className='span'><button className='button'>Send Message</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='img'>
                        <img src='\Asset\Img\optician.jpg' />
                    </div>
                </div> */}
            </Div>
        )
    }
}
    


export default Contact
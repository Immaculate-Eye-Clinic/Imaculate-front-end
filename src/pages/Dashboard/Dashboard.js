import React from 'react'

import Profile from '../../components/modules/Profile/Profile'
import Taba from '../../components/modules/Tabs/Taba'
import {Div} from './styled'

import Footer from '../../components/modules/footer/footer'
import Navbar from '../../components/modules/navbar/navbar'
import Modal from '../../components/modules/Modal/Modal'


class Dashboard extends React.Component{
    constructor(){
        super()
        this.state = {
            modalToggle: false,
            text: '',
            time: '',
            date: '',
        }

        this.modalHandler = this.modalHandler.bind(this)
        this.submit = this.submit.bind(this)
        this.change = this.change.bind(this)
    }
    

    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalToggle: !this.state.modalToggle
        })
    }

    change(e){
        const {name, value} = e.target
        this.setState ({
            [name] : e.target.value
        })
    }

    submit(e){
        e.preventDefault()

        const user = {
            text: this.state.text,
            time: this.state.time,
            date: this.state.date,
        }

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            text: JSON.stringify(user),
            time: JSON.stringify(user),
            date: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    render() {
        return (
            <Div>
                <Navbar 
                bgcolor='gray'
                />
                <div className='dash'>
                    <div className='profile'>
                        <Profile />
                        <button 
                            onClick={this.modalHandler} 
                            modalClosed={this.modalHandler} 
                            className='button'>Schedule
                        </button>
                    </div>
                    <div className='tab'>
                        <Taba />
                    </div>
                </div>
                <div className='modal' onSubmit={this.submit}>
                    { this.state.modalToggle &&
                        <Modal show={this.state.modalToggle} onClick={this.modalHandler} >
                            <div>
                                <button onClick={this.modalHandler} className='x'>X</button>
                                <form className='form'>
                                    <h3>Schedule</h3>
                                    <input type='text' name='text' value={this.state.text} onChange={this.change} className='id' /><br/>
                                    <input type='date' name='date' value={this.state.date} onChange={this.change} /><br/>
                                    <input type='time' name='time' value={this.state.time} onChange={this.change} /><br/>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </Modal>
                    }
                </div>
                <Footer />
            </Div>
        )
    }
}

export default Dashboard
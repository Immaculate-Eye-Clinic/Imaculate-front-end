import React from 'react'

import Profile from '../../components/modules/Profile/Profile'
import Taba from '../../components/modules/Tabs/Taba'
import {Div} from './styled'

import Footer from '../../components/modules/footer/footer'
import Navbar from '../../components/modules/navbar/navbar'
import Modal from '../../components/modules/Modal/Modal'


class Dashboard extends React.Component{
    state = {
        modalToggle: false,
    }

    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalToggle: !this.state.modalToggle
        })
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
                    </div>
                    <div className='tab'>
                        <Taba />
                    </div>
                </div>
                <div className='modal'>
                    { this.state.modalToggle &&
                        <Modal show={this.state.modalToggle} onClick={this.modalHandler} >
                            <div>
                                <button onClick={this.modalHandler} className='x'>X</button>
                                <form className='form'>
                                    <h3>Schedule</h3>
                                    <input type='date' /><br/>
                                    <input type='time' /><br/>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </Modal>
                    }
                    <button 
                        onClick={this.modalHandler} 
                        modalClosed={this.modalHandler} 
                        className='button'>Modal Button
                    </button>
                </div>
                <Footer />
            </Div>
        )
    }
}

export default Dashboard
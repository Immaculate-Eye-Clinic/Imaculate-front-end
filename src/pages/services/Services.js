import React from "react"
import {Cards} from "./Styles"
import {NavLink} from 'react-router-dom'
import { Zoom } from "react-reveal"
import Modal from '../../components/modules/Modal/Modal'

class Services extends React.Component{
        state = {
            modalToggle: false,
        }

    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalToggle: true
        })
    }
    render() {
        return(
            <Cards imgUrl = {this.props.service.imgUrl}>
                <div className='card'>
                    <div className='caption_container'>
                    </div>
                    <div className = 'card_text'>
                        <div className='caption'>
                            {this.props.service.caption}
                            <NavLink to={this.props.service.link}><button>{this.props.service.readMore}</button></NavLink>
                        </div>
                        <Modal show={this.state.modalToggle}>
                            <div>
                                The best has happened
                            </div>
                        </Modal>
                    </div>
                    
                </div>
            </Cards>  
        )
    }
}


export default Services
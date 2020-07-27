import React from 'react'

class Schedulebutton extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
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
                <button onClick={this.modalHandler} modalClosed={this.modalHandler}>Modal Button</button>
            </div>
        )
    }
}

export default Schedulebutton
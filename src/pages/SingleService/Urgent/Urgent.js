import React from 'react'
import {NavLink} from 'react-router-dom'

import Header from '../../../components/modules/Header/Header'
import Navs from '../Navs'
import {Div} from './styled'

class Urgent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            loss: false,
            red: false,
            float: false,
        }
    }
    render() {
        return (
            <Div>
                <div>
                    <Header 
                    bgcolor={'transparent'}
                    title={'Welcome Home'}
                    subText={'Sub text goes here and this long'}
                    height={'70vh'}
                    mobileHeight={'50vh'}
                    img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
                    />
                    <Navs />
                </div>
                <div className='body'>
                    <div className='head'>
                        <p>How can we help?</p>
                        <h1><b>TREATMENT OF URGENT EYE PROBLEMS</b> </h1>
                    </div>
                    <div className='op'>
                        <div className='text'>
                            <p>
                            wide variety of problems can affect the eye and surrounding structures. Ophthalmologists are qualified doctors who have special training in diagnosing and managing eye problems.
                            All our Ophthalmologists are experienced Consultants who are registered as Specialists in the UK.
                            </p><br />
                            <p><b>Ask our friendly team about your eye problem.</b> Whether it’s an urgent issue or something that has been nagging you for a while, we’ll do our level best to help.</p>
                            <div>
                                <div>
                                    <button onClick={() => this.setState({open: !this.state.open})}>
                                        <div>
                                        <h1 className='hi'>EYE PAIN</h1>
                                        <h1 className='h'>{this.state.open === false ? '+' : '-'}</h1>
                                        </div>
                                    </button>
                                    {this.state.open && 
                                        <div>
                                            <p>
                                            This can be caused by many different problems, ranging from scratches and foreign bodies on the eye to infection and inflammation of the eye and surrounding structures.
                                            Making the correct diagnosis is key to ensuring that the right treatment can be prescribed.
                                            </p>
                                        </div>
                                    }<hr />
                                </div>
                                <div>
                                    <button onClick={() => this.setState({loss: !this.state.loss})}>
                                        <div>
                                        <h1 className='hi'>LOSS OF VISION</h1>
                                        <h1 className='h'>{this.state.loss === false ? '+' : '-'}</h1>
                                        </div>
                                    </button>
                                    {this.state.loss && 
                                        <div>
                                            <p>
                                            Vision may be lost suddenly or over a long period of time. Many causes are eminently treatable, and the correct treatment depends
                                             on identifying the cause. Often early diagnosis results in the best outcomes.
                                            </p>
                                        </div>
                                    }<hr />
                                </div>
                                <div>
                                    <button onClick={() => this.setState({red: !this.state.red})}>
                                        <div>
                                        <h1 className='hi'>RED EYES</h1>
                                        <h1 className='h'>{this.state.red === false ? '+' : '-'}</h1>
                                        </div>
                                    </button>
                                    {this.state.red && 
                                        <div>
                                            <p>
                                            Red eye is one of the most common eye conditions. Inflammation of almost any part of the eye, including the lacrimal glands and eyelids, or faulty tear film can lead to red eye.
                                            A timely consultation with one of our Consultant Ophthalmologists will help to establish the correct diagnosis and commence appropriate treatment.
                                            </p>
                                        </div>
                                    }<hr />
                                </div>
                                <div>
                                    <button onClick={() => this.setState({float: !this.state.float})}>
                                        <div>
                                        <h1 className='hi'>FLOATER</h1>
                                        <h1 className='h'>{this.state.float === false ? '+' : '-'}</h1>
                                        </div>
                                    </button>
                                    {this.state.float && 
                                        <div>
                                            <p>
                                            Floaters are lines or specks in the vision. They can be accompanied by other symptoms, like flashing lights.
                                             Apart from being annoying, floaters may indicate more serious eye diseases.
                                            </p>
                                        </div>
                                    }<hr />
                                </div>
                            </div>
                        </div>    
                        <div className='image'>
                            <img src='/Asset/Img/urgent.jpg' alt='' />
                        </div>
                    </div><br /><br />
                </div>
            </Div>
        )
        }
}

export default Urgent
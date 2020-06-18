import React from 'react'

import Header from '../../../components/modules/Header/Header'
import Navs from '../Navs'
import {Div} from './styled'

class Urgent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
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
                                <button onClick={() => this.setState({open: !this.state.open})}>
                                    <div>
                                    <h1 className='hi'>Eye Pain</h1>
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
                        </div>    
                        <div className='image'>
                            <img src='/Asset/Img/urgent.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </Div>
        )
        }
}

export default Urgent
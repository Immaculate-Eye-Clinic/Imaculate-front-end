import React from 'react'

import Header from '../../../components/modules/Header/Header'
import Toolbar from '../Navbar/Toolbar'
import {Div} from './styled'
import Prop from './Urgentprops'

class Urgent extends React.Component {
    
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
                    <Toolbar />
                </div>
                <div className='body'>
                    <div className='head'>
                        <p>How can we help?</p>
                        <h1><b>TREATMENT OF URGENT EYE PROBLEMS</b> </h1>
                    </div>
                    <div className='op'>
                        <div className='text'>
                            <p>
                            Wide variety of problems can affect the eye and surrounding structures. Ophthalmologists are qualified doctors who have special training in diagnosing and managing eye problems.
                            </p><br />
                            <p><b>Ask our friendly team about your eye problem.</b> Whether it’s an urgent issue or something that has been nagging you for a while, we’ll do our level best to help.</p>
                            <div>
                                <Prop head={'EYE PAIN'}>
                                    This can be caused by many different problems, ranging from scratches and foreign bodies on the eye to infection and inflammation of the eye and surrounding structures.
                                    Making the correct diagnosis is key to ensuring that the right treatment can be prescribed.
                                </Prop>
                                <Prop head={'LOSS OF SIGHT'}>
                                    Vision may be lost suddenly or over a long period of time. Many causes are eminently treatable, and the correct treatment depends 
                                    on identifying the cause. Often early diagnosis results in the best outcomes.
                                </Prop>
                                <Prop head={'RED EYES'}>
                                    Red eye is one of the most common eye conditions. Inflammation of almost any part of the eye, including the lacrimal glands and eyelids, or faulty tear film can lead to red eye.
                                    A timely consultation with one of our Consultant Ophthalmologists will help to establish the correct diagnosis and commence appropriate treatment.
                                </Prop>
                                <Prop head={'FLOATERS'}>
                                    Floaters are lines or specks in the vision. They can be accompanied by other symptoms, like flashing lights. Apart from being annoying, floaters may indicate more serious eye diseases.
                                </Prop>
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
import React from 'react'

import Header from '../../../components/modules/Header/Header'
import Navs from '../Navs'
import {Div} from './styled'
import Prop from './Prop'

class Cataract extends React.Component {
    
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
                        <h1><b>CATARACT TREATMENT AND SURGERY</b> </h1>
                    </div>
                    <div className='op'>
                        <div className='text'>
                            <p>
                                At Infinity Eye Clinic, we offer a cataract treatment service. We remove cataracts to restore vision. For most patients,
                                the treatment of choice is a minimally-invasive procedure, called phacoemulsification.
                            </p><br />
                            <p> The surgery lasts about 30 minutes and can usually be performed as a day case, under local anaesthesia. This means
                                patients recover very quickly from surgery and don’t need to stay overnight in hospital.</p>
                            <div>
                                <Prop head={'WHAT ARE CATARACTS?'}>
                                    <p>
                                        A  cataract forms when the normally clear lens of the eye becomes cloudy, causing blurry vision. The normal lens focuses light onto the back of the eye so that images appear sharp.
                                        The clouding of this lens when a cataract forms distorts vision.
                                    </p>
                                    <p>
                                        Cataracts usually form gradually and are age related but can also develop rapidly. They often affect both eyes, but it is not uncommon for a cataract in one eye to form more quickly.
                                        Cataracts become more common, as people become older.
                                    </p>
                                    <p>
                                        It is uncertain precisely why cataracts occur. Most cataracts are thought to be caused by changes in the protein structures within the lens over a period of years so that the lens becomes cloudy.
                                        Rarely, early childhood cataracts or cataracts in the new-born may be a result of genetic disease, hereditary enzyme defects, or systemic congenital infections.
                                    </p>
                                    <p>
                                        The formation of cataracts can also be hastened by severe trauma to the eye, eye surgery, or intraocular inflammation. Excessive ultraviolet light exposure, exposure to ionizing radiation, smoking, diabetes mellitus, or the use of certain medications, such as oral, topical, or inhaled steroids,
                                        & statins have been thought to be associated with promoting cataract formation.
                                    </p>
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
                            <img src='/Asset/Img/cataract.jpg' alt='' />
                        </div>
                    </div><br /><br />
                </div>
            </Div>
        )
        }
}

export default Cataract
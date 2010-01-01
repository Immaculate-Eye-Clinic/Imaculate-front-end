import React from 'react'

import Header from '../../../components/modules/Header/Header'
import Navs from '../Navbar/Navs'
import {Div} from './styled'
import Prop from './Prop'
import Footer from '../../../components/modules/footer/footer'

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
                                At Immaculate Eye Clinic, we offer a cataract treatment service. We remove cataracts to restore vision. For most patients,
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
                                <Prop head={'What are the symptoms of a cataract?'}>
                                    <p>
                                        Apart from blurred vision, cataracts cause difficulty with glare (in bright sunlight or vehicle headlights when driving at night), dull colour vision,
                                        difficulty with reading and near vision, and frequent changes in spectacles prescription.
                                    </p>
                                    <p>                          
                                        Initially, a change in glasses may help when vision begins to change from an early cataract. However, stronger glasses or contact lenses
                                        will no longer improve the vision as the cataract develops and becomes more dense and cloudy.
                                    </p>
                                    <p>
                                        Eye pain, redness or tiredness is usually not associated with cataract. As cataracts usually develop gradually over months or years, any more rapid or painful changes in vision suggest other eye diseases.
                                        If in doubt, there should be an urgent or early evaluation by an ophthalmologist.
                                    </p>
                                </Prop>
                                <Prop head={'How do you get diagnosed with a cataract?'}>
                                    <p>
                                        An optician or ophthalmologist can diagnose cataracts by detecting opacities in the lens during a medical eye examination. The lens of the eye
                                        affected by cataract formation can be seen using a variety of specialized viewing instruments.
                                    </p>
                                    <p>
                                        An eye care specialist is able to tell how much a cataract may be affecting vision by employing the usual eye tests include testing visual acuity using a Snellen chart, colour vision,
                                        glare & contrast sensitivity, and a thorough examination of all other parts of the eye.
                                    </p>
                                    <p>
                                        It is important for the ophthalmologist to exclude diabetes mellitus, glaucoma and macular degeneration by performing a thorough examination.
                                    </p>
                                    <p>
                                        If your cataract does not affect your daily life in any way, or if you are not keen to have surgery, it is not imperative to undergo cataract surgery.
                                    </p>
                                    <p>
                                        Most cataracts develop slowly with age, and many patients do not notice loss of vision until it is quite advanced. It is not possible to predict with certainty how rapidly
                                        cataracts will develop and some cataracts remain less dense and do not progress to the degree where they cause 
                                        blurred vision severe enough to require cataract surgery. Some cataracts progress more rapidly.
                                    </p>
                                    <p>
                                        Your ophthalmologist will assist you in making your own individual choice about whether and when to proceed with cataract surgery. The ophthalmologist will be able to advise you
                                        how much of your loss of vision is due to cataracts
                                        and what sort of visual improvement you can expect if you choose to have cataract surgery.
                                    </p>
                                </Prop>
                                <Prop head={'What types of cataract surgeries are available?'}>
                                    <p>
                                        Nowadays, the most common form of cataract surgery involves a process called Phacoemulsification. Using an operating microscope, your ophthalmic surgeon
                                        will make a very small incision in the surface of the eye in or near the cornea and then inserts a thin probe into the eye.
                                    </p>
                                    <p>
                                        The ultrasound probe uses ultrasonic vibrations to dissolve the clouded lens.
                                        These tiny fragments are then suctioned out through the same ultrasound probe, following which an artificial lens is placed into the thin capsular bag that the original lens previously occupied.
                                        This artificial lens is required to help your eye focus following cataract surgery.
                                    </p>
                                    <p>
                                        Other less common techniques for cataract surgery nowadays are Extra-capsular cataract
                                        surgery and Intra-capsular cataract surgery, but may be appropriate in such cases as extremely advanced and dense cataracts,
                                        or where there has been previous significant eye trauma.
                                    </p>
                                </Prop>
                            </div>
                        </div>    
                        <div className='image'>
                            <img src='/Asset/Img/cataract.jpg' alt='' />
                        </div>
                    </div><br /><br />
                </div>
                <Footer />
            </Div>
        )
        }
}

export default Cataract
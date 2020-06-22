import React from 'react'
import Faqprops from './Faqprops'

import Header from '../../../components/modules/Header/Header'
import BlogNav from '../blogNav/BlogNav'
import Contact from '../../../components/modules/contactUs/Contact'
import Footer from '../../../components/modules/footer/footer'

class Faq extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
            
        }
    }

    render(props){
        return(
            <div>
                <Header 
                    bgcolor={'transparent'}
                    title={'Frequently Asked Questions'}
                    subText={'Get to Ask us questions'}
                    height={'70vh'}
                    mobileHeight={'50vh'}
                    img={'https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg'}
                />
                <BlogNav />
                <Faqprops header='Service' question='What services do you provide?'>
                    Infinity Eye Clinic specialises in the diagnosis and treatment of Cataracts and Glaucoma. We provide an efficient service for the treatment of Chalazion. We also deal with General Ophthalmological conditions such as Dry Eye and Blepharitis. We manage both chronic diseases and urgent eye problems in adults and children
                </Faqprops>
                <Faqprops header='Consultations' question='Who will do my consultation?'>
                    A Consultant Ophthalmic Surgeon will assess your eye condition, unless you have agreed otherwise.  Certain parts of the examination or testing may be conducted by trained members of the Consultant’s team.
                </Faqprops>
                <Faqprops question='Whats included in the fee for my consultation?'>
                    The Consultation fee covers a clinical assessment of your eye condition including gathering an ophthalmic history. When attending our clinic in person, you will have an examination of your eyes including, where appropriate, an assessment of your visual acuity and pupil reflexes, measurement of your eye pressures, and examination of the front and back of your eyes using a slit-lamp and diagnostic lenses.  The Consultation fee excludes the cost of any special tests or treatment that the Consultant recommends.
                </Faqprops>
                <Faqprops question='What should I expect on the day of my consultation?'>
                    If you are attending our clinic, please do not plan to drive on the day of your consultation.  Eye drops may need to be instilled in your eyes, and these may cause your vision to be blurred and sensitive to bright light for several hours.  We can arrange a car and driver to take you to and from your home or workplace – at our expense, if you are local (within 3 miles).  Your vision will be assessed with your glasses or contact lenses, if you wear them.  You will then need to remove your glasses or contact lenses for your eyes to be examined and tested.  If you wear eye make-up, this may become smudged during examination of your eyes.
                </Faqprops>
                <Faqprops question='What should I bring for my consultation?'>
                    If you wear glasses or contact lenses, please bring them together with any cases, solutions and optician reports.  Please bring a list of any eye drops, tablets or other medications you use.  Please bring some sunglasses or a hat to guard your eyes against bright light after the consultation.<br/><br/>
                    Please make sure you give us your correct postal address and other contact details so that we can correspond with you. It is our policy to keep your General Practitioner informed regarding your treatment. Please give us your General Practitioner’s name and address to enable us to do this.
                </Faqprops>
                <Faqprops header='Insurance' question='Do I need health insurance?'>
                    You don’t need health insurance to use our services.  You only pay for treatment when you need it.  We deal directly with our patients to offer a high-quality, value-for-money service.
                </Faqprops>
                <Faqprops question='I have health insurance, Can i use it?'>
                    If you have private medical insurance, please contact your insurer before your consultation, to check the terms of your policy, particularly the level and type of outpatient cover you have, including any reimbursement limits on individual consultation fees. Please note you are responsible for any fees not covered by your insurer.
                </Faqprops>
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Faq
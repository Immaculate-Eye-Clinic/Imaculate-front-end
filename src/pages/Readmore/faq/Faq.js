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
                    Infinity Eye Clinic specialises in the diagnosis and
                    treatment of Cataracts and Glaucoma. We provide an 
                    efficient service for the treatment of Chalazion. We also 
                    deal with General Ophthalmological conditions such as Dry
                    Eye and Blepharitis. We manage both chronic diseases and
                    urgent eye problems in adults and children
                </Faqprops>
                <Faqprops header='Consultations' question='Who will do my consultation'>
                A Consultant Ophthalmic Surgeon will assess your eye condition,
                unless you have agreed otherwise.  Certain parts of the examination or 
                testing may be conducted by trained members of the Consultant’s team.
                </Faqprops>
                <Faqprops question='howfar'>
                    hdjjskisi jdsjjkas gdghwjhaj
                </Faqprops>
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Faq
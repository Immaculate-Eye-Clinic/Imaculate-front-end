import React from 'react'

import Header from '../../../components/modules/Header/Header'
import Navs from '../Navbar/Navs'
import {Div} from './styled'
import Prop from './Chalazionprop'
import Footer from '../../../components/modules/footer/footer'

class Chalazion extends React.Component {
    
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
                        <h1><b>CHALAZION REMOVAL</b> </h1>
                    </div>
                    <div className='op'>
                        <div className='text'>
                            <p>
                                A chalazion, also known as a meibomian cyst, is a firm round lump in the upper or lower eyelid caused by a chronic inflammation or blockage of the meibomian gland. It can sometimes be mistaken for a stye. It can become acutely infected, otherwise it may settle by itself.
                                It could cause eyelid tenderness, and heaviness of the eyelid.
                            </p>
                            <div>
                               <Prop head={'CONSERVATIVE TREATMENT'}>
                                    Instructions on how to apply a warm compress which can be used to increase drainage of the affected gland will form part of treatment, as well as instructions on how to gently massage after warm compress to help to express the contents of the cyst.
                                    <p><b>If acutely inflamed</b>, antibiotic ointment might be prescribed.</p>
                               </Prop>
                               <Prop head={'REMOVAL BY INCISION & CURETTAGE'}>
                                    <b>If conservative measures fail</b>, chalazia can be treated by surgical incision followed
                                    by curettage of the retained secretions and inflammatory material under local anaesthetic.
                               </Prop>
                            </div>
                        </div>    
                        <div className='image'>
                            <img src='/Asset/Img/glass.jpg' alt='' />
                        </div>
                    </div><br /><br />
                </div>
                
            </Div>
        )
        }
}

export default Chalazion
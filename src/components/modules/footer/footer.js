import React from 'react'
import {Wrapper} from './styled'

class Footer extends React.Component {
    render() {
        return (
            <Wrapper>
             <div className='diw'>
              <div className='div'>
                <div className='div1'>
                    <div className='name'>
                       <h1 className='spa'>Immaculate</h1><br />
                       <span>Eye Clinic</span>
                    </div><br /><br /><br />
                    <div className='add'>
                        <h1>Adress</h1>
                        <p>No 1. Ipsun Street mbah ndi Ipsun maka Ipsun is all i have to say at this Ipsun Loremous Time</p>
                    </div><br />
                    <div className='num'>
                        <h1>Mobile</h1>
                        <p>+2348063718025</p>
                        <p>+2348000000000</p>
                    </div>
                </div>
                <div className='div2'>
                    <h1>Types Of Glaucoma</h1>
                    <p>Open-Angled Glaucoma</p>
                    <p>Angle-Closure Glaucoma</p>
                    <p>Normal Tension Glaucoma (NIG)</p>
                    <p>Congenital Glaucoma</p>
                    <p>Other Types of Glaucoma</p>
                </div>
                <div className='div3'>
                    <h1>About The Clinic</h1>
                    <p>History</p>
                    <p>Mission, Vision and values</p>
                </div>
             </div><br/> <br /><br /><br />
             <div className='dim'>
                    <div>
                        <p className='a'>Privacy Policy</p><hr />
                        <p className='b'>Terms and Conditions</p>
                    </div>
                </div>
             </div>
                
            </Wrapper>
        )
    }
}

export default Footer
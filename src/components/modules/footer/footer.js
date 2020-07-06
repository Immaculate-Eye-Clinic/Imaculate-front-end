import React from 'react'
import {Wrapper} from './styled'

class Footer extends React.Component {
    render() {
        return (
            <Wrapper>
             <div className='diw'>
              <div className='container'>
                <img src='asset/img/logo1.png' alt="logo" />
                <div className='div1'>
                    <div className='add'>
                        <h1>Address</h1>
                        <p className='pa'>No 1. Ipsun Street mbah ndi Ipsun maka Ipsun is all i have to say at this Ipsun Loremous Time</p>
                    </div><br />
                </div>
                <div className='div2'>
                    <h1>Types Of Glaucoma</h1>
                    <p className='pa'>Open-Angled Glaucoma</p>
                    <p className='pa'>Angle-Closure Glaucoma</p>
                    <p className='pa'>Normal Tension Glaucoma (NIG)</p>
                    <p className='pa'>Congenital Glaucoma</p>
                    <p className='pa'>Other Types of Glaucoma</p>
                </div>
                <div className='div3'>
                    <h1>About The Clinic</h1>
                    <p>History</p>
                    <p className='pa'>Mission, Vision and values</p>
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
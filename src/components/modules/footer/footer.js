import React from 'react'
import {Wrapper, Div, Div1, Div2, Div3, Dim} from './styled'

class Footer extends React.Component {
    render() {
        return (
            <Wrapper>
              <Div>
                <Div1>
                    <div className='name'>
                       <h1>Immaculate</h1><br />
                       <span>Eye Clinic</span>
                    </div><br /><br /><br />
                    <div>
                        <h1>Adress</h1>
                        <p>No 1. Ipsun Street mbah ndi Ipsun maka Ipsun is all i have to say at this Ipsun Loremous Time</p>
                    </div><br />
                    <div>
                        <h1>Mobile</h1>
                        <p>+2348063718025</p>
                        <p>+2348000000000</p>
                    </div>
                </Div1>
                <Div2>
                    <h1>Types Of Glaucoma</h1>
                    <p>Open-Angled Glaucoma</p>
                    <p>Angle-Closure Glaucoma</p>
                    <p>Normal Tension Glaucoma (NIG)</p>
                    <p>Congenital Glaucoma</p>
                    <p>Other Types of Glaucoma</p>
                </Div2>
                <Div3>
                    <h1>About The Clinic</h1>
                    <p>History</p>
                    <p>Mission, Vision and values</p>
                </Div3>
             </Div><br/> <br /><br /><br />
                <Dim>
                    <div>
                        <p className='a'>Privacy Policy</p>
                        <p className='b'>Terms and Conditions</p>
                    </div>
                </Dim>
            </Wrapper>
        )
    }
}

export default Footer
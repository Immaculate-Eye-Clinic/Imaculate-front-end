import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Div } from './MapStyle'


const mapStyle = {
    width: '40%',
    height: '50%',
}


export class MapImage extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    render(){
        return(
            <Div>
                <div className='map'>
                    <div className='div2'>
                        <Map 
                            google={this.props.google} 
                            zoom={14} 
                            containerStyle={mapStyle}
                            initialCenter={{
                                lat: 5.392691,
                                lng: 6.986264
                            }} 
                        >
                            <Marker onClick={this.onMarkerClick} position={{lat: 5.392691, lng: 6.986264}}
                                name={'Current location'} 
                            />
                            <InfoWindow onClose={this.onInfoWindowClose}>
                                
                            </InfoWindow>
                        </Map>
                    </div>
                </div>
                <div className='text-section'>
                    <div className='div'>
                        <h2 className='first'>
                            Do you have an enquiry? Or simply want to find out more about us? Feel free to get in touch. We’d love to hear from you
                        </h2>
                        <p>
                            Connect using this page, or via telephone, email or social media. And remember to sign up for our newsletter to receive the latest updates straight to your email inbox.
                        </p>
                        <h2 className='second'>
                            Immaculate Eye Clinic<br/>
                            10 Owerri Street<br/>
                            Nigeria<br/>
                            W1G 9PF
                        </h2>
                        <h2 className='third'>
                            UK Freephone <a href='#' className='a1'>0800 880 3300</a>
                        </h2>
                        <h2 className='forth'>
                            Enquiries <a href='#' className='a2'>info@immaculateEyeClinic.com</a>
                        </h2>
                    </div>
                </div>
            </Div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCf23IjMOZeaAc90-uh7zIQvR3h4hCFaf0')
})(MapImage)
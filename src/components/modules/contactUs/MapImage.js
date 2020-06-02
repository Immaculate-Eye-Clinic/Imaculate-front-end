import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Div } from './MapStyle'

const mapStyle = {
    width: '80%',
    height: '102%'
}

export class MapImage extends React.Component{
    render(){
        return(
            <Div>
                <Map google={this.props.google} zoom={14} style={mapStyle}>
 
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} 
                    />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        
                    </InfoWindow>
                </Map>
            </Div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCf23IjMOZeaAc90-uh7zIQvR3h4hCFaf0')
})(MapImage)
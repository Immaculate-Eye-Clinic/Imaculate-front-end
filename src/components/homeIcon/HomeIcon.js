import React from 'react'
import IconData from './IconData'
import {Divs} from '../blogCard/ComponentStyle'
import New from './IconList' 

function HomeIcon(props){
    const IconComponent = IconData.map(icon => <New key={icon.id} icon={icon}/>)
    return(
        <div>
       
               <Divs>{IconComponent}</Divs>
        </div>
    )
}

export default HomeIcon 
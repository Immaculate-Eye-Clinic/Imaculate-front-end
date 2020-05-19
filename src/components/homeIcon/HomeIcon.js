import React from 'react'
import IconData from './IconData'
import {body} from '../blogCard/ComponentStyle'
import New from './IconList' 

function HomeIcon(props){
    const IconComponent = IconData.map(icon => <New key={icon.id} icon={icon}/>)
    return(
        <div>
       
               <body>{IconComponent}</body>
        </div>
    )
}

export default HomeIcon 
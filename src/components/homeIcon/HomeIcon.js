import React from 'react'
import IconList from './IconList'
import IconData from './IconData'
import {Div} from '../blogCard/ComponentStyle'

function HomeIcon(props){
    const IconComponent = IconData.map(icon => <IconList key={icon.id} icon ={icon}/>)

    return(
        <div>
            <Div>{IconComponent}</Div>
        </div>
    )
}

export default HomeIcon 
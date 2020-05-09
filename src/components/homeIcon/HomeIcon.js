import React from 'react'
import IconList from './IconList'
import IconData from './IconData'
import {Div1} from '../blogCard/ComponentStyle'

function HomeIcon(props){
    const IconComponent = IconData.map(icon => <IconList key={icon.id} icon ={icon}/>)

    return(
        <div>
            <Div1>{IconComponent}</Div1>
        </div>
    )
}

export default HomeIcon
import React from 'react'
import IconList from './IconList'
import IconData from './IconData'
import {Div, Divs} from '../blogCard/ComponentStyle'
import New from './new' 

function HomeIcon(props){
  {/*  const IconComponent = IconData.map(icon => <IconList key={icon.id} icon ={icon}/>)*/}
    const Wew = IconData.map(icon => <New key={icon.id} icon={icon}/>)
    return(
        <div>
           {/* <Div>{IconComponent}</Div> */}
               <Divs>{Wew}</Divs>
        </div>
    )
}

export default HomeIcon 
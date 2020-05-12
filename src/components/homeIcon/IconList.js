import React from 'react'
import {Div} from './IconStyle'

function IconList(props){
    return(
        <Div>
            <div className='container'>
            <div className='card'>
               <div className='.div'>
                   <div className='imgBx' >
                     <img src={props.icon.imgUrl} alt="icon"/>
                    
                    </div>
                <div>
                    <div className='design'>
                        <h3>Design</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>{props.icon.caption}</p>
                    </div>
                    
                </div>
                </div>
           </div>
           </div>
        </Div>
    )
}

export default IconList
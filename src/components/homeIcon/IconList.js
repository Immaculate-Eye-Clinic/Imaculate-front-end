import React from 'react'
import {Div} from './IconStyle'

function IconList(props){
    return(
        <Div>
            <div className='container'>
            <div className='card'>
               <div className='.div'>
                   <div className='imgBx' dataText={props.icon.h3} >
                     <img src={props.icon.imgUrl} alt="icon"/>
                    
                    </div>
                <div>
                    <div className='design'>
                        <div>
                        <h3>{props.icon.h3} </h3>
                        <p>{props.icon.p}</p>
                        <p>{props.icon.caption}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
           </div>
        </Div>
    )
}



export default IconList
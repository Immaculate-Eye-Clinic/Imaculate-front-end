import React from 'react'
import {Div, Img, P} from './Style'

class BlockCard extends React.Component{
    render(){
        return(
            <Div>
                <Img src='/Asset/Img/g.jpg' alt='card' width='100%' height='100%' />
                <P>What ypu must know about Corona Virus</P>
            </Div>
        )
    }
}

export default BlockCard
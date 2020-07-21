import React from 'react'

import {Cont} from './styled'

function Content(props) {
    return (
        <Cont>
            {props.children}
        </Cont>
    )
}

export default Content
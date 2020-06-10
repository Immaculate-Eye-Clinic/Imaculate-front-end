import React from 'react'
import Skeleton from './Skeleton'
import SkeletonList from './SkeletonList'
import {Skelet} from './Styled'

function Skeletons() {
    const Skel = SkeletonList.map((data) => <Skeleton key={data.id} data={data}/>)
    return (
        <Skelet>
            {Skel}
        </Skelet>
    )
}

export default Skeletons
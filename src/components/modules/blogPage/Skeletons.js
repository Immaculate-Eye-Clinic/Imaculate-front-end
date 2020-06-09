import React from 'react'
import Skeleton from './Skeleton'
import SkeletonList from './SkeletonList'

function Skeletons() {
    const Skel = SkeletonList.map((data) => <Skeleton key={data.id} data={data}/>)
    return (
        <div>
            {Skel}
        </div>
    )
}

export default Skeletons
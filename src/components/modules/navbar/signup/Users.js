import React from "react"
import {UserStyle} from "./UserStyle"

function Users (){
    return(
        <UserStyle> 
            <div className = 'container'>
            <img src = "https://res.cloudinary.com/hisroyalwonginess/image/upload/v1589490335/65U_hqdqju.svg"  alt = "Login" height = "30px" width = "30px"/>
            <div className = 'hidden'>
                Hidden text
            </div>
            </div>
        </UserStyle>
    )
}


export default Users
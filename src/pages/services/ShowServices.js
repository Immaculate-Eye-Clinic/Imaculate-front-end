import React from "react"
import ServicesData from "./ServicesData"
import Services from "./Services"
import {FlexStyle} from "./Styles"

function ShowServices (props){
    return(
        <FlexStyle>
            {ServicesData.map((service, index) =>(
                <Services key = {service.id} service = {service} />
            ))}
        </FlexStyle>
    )
}

export default ShowServices
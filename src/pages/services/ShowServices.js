import React from "react"
import ServicesData from "./ServicesData"
import Services from "./Services"

function ShowServices (props){
    return(
        <div>
            {ServicesData.map((service, index) =>(
                <Services key = {service.id} service = {service} />
            ))}
        </div>
    )
}

export default ShowServices
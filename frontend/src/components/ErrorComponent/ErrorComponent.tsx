import React from "react";
import "./ErrorComponent.css"

interface ErrorProps{
    message : string,
    code : number
}

const ErrorComponent : React.FC<ErrorProps> = ({code , message})=>{
    
    return(
        <div className="error-component">
            <h2>Error :</h2>
            <h3>{code}</h3>
            <p>{message}</p>
        </div>
    )
}

export default ErrorComponent;
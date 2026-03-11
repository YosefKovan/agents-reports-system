import React from "react";
import "./AlertComponent.css"

interface AlertProps{
    message : string | null,
    code?: number,
    className : "success" | "fail" 
}

const AlertComponent : React.FC<AlertProps> = ({code , message, className})=>{
    

    return(
        <div className={"alert-component" + " " + className}>
            <h2>{className === "success" ? "Success :" : "Error"}</h2>
            {code && <h3>{code}</h3>}
            <p>{message}</p>
        </div>
    )
}

export default AlertComponent;
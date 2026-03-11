import {type FC} from "react"
import "./Select.css";

interface Props{
    value : string,
    setValue : any,
    options : string[]
}

const Select : FC<Props> = ({value, setValue, options})=>{

    return(
        <select className="custom-select" value={value} onChange={(e)=>setValue(e.target.value)}>  
              <option value="all">All</option>
              {options.map((opt: string) => (
                <option value={opt}>{opt}</option>
              ))}
        </select>
    )

}

export default Select;
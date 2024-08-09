import { useEffect, useState } from "react"
import "./Hero.css"
import {useLocation} from "react-router-dom"
const Hero=()=>{
    const [val, setVal]= useState("")
    const {pathname}= useLocation()
    useEffect(()=>{
        if(pathname){
            const val = pathname.slice(1).toUpperCase();
            setVal(val)
        }
        
    },[pathname])
    return(
        <div className="Hero">
            <div>
                {val}
            </div>
        </div>
    )
}

export default Hero
import "./css/Categories.css";
import HomeCard from "../components/HomeCard";
import products from "../dB/products.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"

const Categories=()=>{
    const [catArray, setCatArray]= useState([])
    const {catName}= useParams()
    useEffect(()=>{
        const catItems = products.filter((e)=> e.category.toLowerCase() === catName);
        setCatArray(catItems)
    },[])
    return(
        <div className="Categories">
            {
                catArray.map((e)=>(
                    <HomeCard key={e.id} info={e}/>
                ))
            }
        </div>
    )
}

export default Categories
import CategoryCard from "../components/CategoryCard"
import "./css/Category.css"
import products from "../dB/products.js";
import {useState, useEffect} from "react"

const Category=()=>{
    const [catArray, setCatArray]= useState([])
    
    useEffect(()=>{
        const holdArray = products.map((e)=> e.category);
        const catchCats = holdArray.reduce((a, e, i)=> {
            if(a.length === 0){
                a.push(e.toLowerCase());
                return a
            }else if(a.includes(e.toLowerCase())){
                return a
            }else{
                a.push(e.toLowerCase());
                return a
            }
        }, [])
        setCatArray(catchCats)
    },[])
    return(
        <div className="Category">
            {
                catArray.map((e, i)=>(
                    <CategoryCard key={i} name={e}/>
                ))
            }
        </div>
    )
}

export default Category
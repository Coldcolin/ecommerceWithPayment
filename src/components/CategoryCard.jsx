import "../pages/css/CategoryCard.css";
import {Link} from "react-router-dom"


const CategoryCard=({name})=>{
    
    return(
        <Link className="CategoryCard" to={`/categories/${name}`}>
            {name.toUpperCase()}
        </Link>
    )
}

export default CategoryCard
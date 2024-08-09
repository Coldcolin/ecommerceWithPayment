import "../pages/css/HomeCard.css";
import { MdShoppingBag } from "react-icons/md";
import { RiAppsFill } from "react-icons/ri";
import {useDispatch} from "react-redux";
import {addToCart} from "../api/Slice"

const HomeCard=({info})=>{
    const dispatch = useDispatch();


    
    return(
        <div className="HomeCard">
            <article>
                <div ><RiAppsFill /></div>
                <div onClick={()=> dispatch(addToCart(info))}><MdShoppingBag /></div>
            </article>
            <section>
                <img src={info.image}/>
            </section>
            <footer>
                <p>{info.name}</p>
                <p>₦{info.price}</p>
            </footer>
        </div>
    )
}

export default HomeCard;
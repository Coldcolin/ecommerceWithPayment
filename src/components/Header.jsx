import "./Header.css"
import { FaBagShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { logout } from "../api/Slice";

const Header=()=>{
    const {cart, total} = useSelector((el)=> el);
    const dispatch = useDispatch()

    return(
        <div className="Header">
            <section>
                <div>S</div>
                ShoeHub
            </section>
            <nav>
                <div><NavLink to="/home" style={({isActive})=> isActive? {color: "brown"}:{color: "black"}}>Home</NavLink></div>
                <div><NavLink to="/categories" style={({isActive})=> isActive? {color: "brown"}:{color: "black"}}>Category</NavLink></div>
                <div><NavLink to="/cart" style={({isActive})=> isActive? {color: "brown"}:{color: "black"}}>Cart ({cart.length})</NavLink></div>
            </nav>
            <article>
                <p>$ {total}</p>
                <div><FaBagShopping/></div>
                <h2 onClick={()=> dispatch(logout())}>Logout</h2>
            </article>
        </div>
    )
}

export default Header
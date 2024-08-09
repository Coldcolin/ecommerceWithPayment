import { Link, useNavigate } from "react-router-dom"
import "./css/Login.css";
import { login } from "../api/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Login=()=>{
    const [formData, setFormData]= useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn= useSelector((state)=> state.isLoggedIn)

    const loginAction=(e)=>{
        e.preventDefault();
        dispatch(login(formData));
        console.log(isLoggedIn)
    }

    useEffect(()=>{
        if(isLoggedIn === true){
            navigate("/home");
            console.log(isLoggedIn)
        }
    },[isLoggedIn])
    return(
        <div className="Login">
            <form onSubmit={loginAction}>
                <label>Login</label>
                <input type="email" name="email" placeholder="email" onChange={(e)=> setFormData((p)=>{
                    return {...p, email: e.target.value}
                })} required={true}/>
                <input type="password" name="password" placeholder="password" onChange={(e)=> setFormData((p)=>{
                    return {...p, password: e.target.value}
                })} required={true}/>
                <button type="submit">Login</button>
                <p>Don't have an account? <span><Link to="/signup">Sign Up</Link></span></p>
            </form>
        </div>
    )
}

export default Login
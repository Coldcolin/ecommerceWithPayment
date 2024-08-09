import { Link, useNavigate } from "react-router-dom"
import "./css/SignUp.css";
import { signUp } from "../api/Slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SignUp =()=>{
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUpAction=(e)=>{
        e.preventDefault();
        dispatch(signUp(formData));
        navigate("/")
    }
    return(
        <div className="SignUp">
            <form onSubmit={signUpAction}>
                <label>Sign Up</label>
                <input type="email" name="email" placeholder="email" onChange={(e)=> setFormData((p)=>{
                    return {...p, email: e.target.value}
                })}/>
                <input type="name" name="name" placeholder="name" onChange={(e)=> setFormData((p)=>{
                    return {...p, name: e.target.value}
                })}/>
                <input type="password" name="password" placeholder="password" onChange={(e)=> setFormData((p)=>{
                    return {...p, password: e.target.value}
                })}/>
                <button type="submit">Sign Up</button>
                <p>Already have an account? <span><Link to="/">Login</Link></span></p>
            </form>
        </div>
    )
}

export default SignUp
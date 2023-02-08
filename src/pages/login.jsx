import { auth, provider } from "../config/firebase.ts";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import "./login.css";
 

export const Login  = () => {
const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    };

    return (
        <div className="login"> 
            <div className="login-items">
            <p> Sign in with Google </p> 
            
            {/* <div className="login-button"> */}
                <button class="button" onClick={signInWithGoogle}> Sign in with Google </button>
            {/* </div> */}
            </div>
        </div>
    );
};
import { Link } from "react-router-dom";
// import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css";

export const Navbar  = () => {
    // const [user] = useAuthState(auth);
    return(
        
        <div className="Navbar">  
            <span className="nav-logo">Foodie'sNetwork</span>
            <div className="nav-items">
                <Link to="/"> Home </Link>
                <Link to="/login"> Login </Link>
            </div>
            
            {/* <div>
                <p> {auth.currentUser?.displayName} </p>
            </div> */}
        </div>
    );
};

export default Navbar;
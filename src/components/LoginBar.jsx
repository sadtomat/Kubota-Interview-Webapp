import NavButton from './NavButton.jsx';
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useUser } from "../hooks/useUser.js";
import { useNavigate } from "react-router-dom";
import './LoginBar.css';

const LoginBar = () => {

    const { user, loading } = useUser();
    const navigate = useNavigate();

     const handleClick = () => {
        navigate("/profile");
     }

    if (loading) {
        return (
            <div className="login-bar">
                <LoadingSpinner/>
                <span className="web-title-text">Welcome to the Kubota Test Web App</span>
            </div>
        );
    }
    if(!user){
        return (    
            <div className="login-bar">
                <NavButton link="/.auth/login/github" linkText="Login" variant="login"/>
                <span className="web-title-text">Welcome to the Kubota Test Web App</span>
            </div>
        );
    }else {
        return (
            <div className="login-bar">
                <img src="https://testwebappblobstorage.blob.core.windows.net/images/profile.png" className="pfp-img" alt="" onClick={handleClick}></img>
                <NavButton link="/.auth/logout" linkText="Logout" variant="login" />
                <span className="web-title-text">Welcome to the Kubota Test Web App</span>
            </div>
        ); 
    }
}

export default LoginBar;
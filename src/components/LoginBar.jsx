import NavButton from './NavButton.jsx';
import { useUser } from "../hooks/useUser.js"
import './LoginBar.css';

const LoginBar = () => {

    const { user, loading } = useUser();


    if (loading) {
        return (
            <div className="login-bar">
                <h1 className="loading-text">Loading...</h1>
                <span className="title-text">Welcome to the Kubota Test Web App</span>
            </div>
        );
    }
    if(!user){
        return (    
            <div className="login-bar">
                <NavButton link="/.auth/login/github" linkText="Login" variant="login" />
                <span className="title-text">Welcome to the Kubota Test Web App</span>
            </div>
        );
    }else {
        return (
            <div className="login-bar">
                <img src="https://testwebappblobstorage.blob.core.windows.net/images/profile.png" className="pfp-img" alt=""></img>
                <NavButton link="/.auth/logout" linkText="Logout" variant="login" />
                <span className="title-text">Welcome to the Kubota Test Web App</span>
            </div>
        ); 
    }
}

export default LoginBar;
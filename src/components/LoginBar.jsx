import NavButton from './NavButton.jsx';
import './LoginBar.css';

const LoginBar = () => {
    return (
        <div className="loginbar">
            <NavButton link="/.auth/login/github" linkText="Login" variant="login" />
            <span className="titleText">Welcome to the Kubota Test Web App</span>
        </div>
    );
}

export default LoginBar;
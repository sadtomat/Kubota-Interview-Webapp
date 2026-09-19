import NavButton from './Navbutton.jsx';
import './LoginBar.css';

const LoginBar = () => {
    return (
        <div className="loginbar">
            <NavButton link="/login" linkText="Login" variant="login" />
            <span className="titleText">Welcome to the Kubota Test Web App</span>
        </div>
    );
}

export default LoginBar;
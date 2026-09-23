import './ProfileDisplay.css';
import { useUser } from "../hooks/useUser.js";
import OrderHistory from "./OrderHistory.jsx";
import NavButton from './NavButton.jsx';
import LoadingSpinner from "./LoadingSpinner.jsx";

export default function ProfileDisplay(){
    const {user, loading} = useUser();

    if (loading){
        <div classname="profiledisplay-outerbox">
            <LoadingSpinner/>
        </div>
    }

    if (!user) {
        return (
            <div classname="profiledisplay-outerbox">
                <img alt="" src="https://testwebappblobstorage.blob.core.windows.net/images/profile.png" className="profiledisplay-pfp"></img>
                <div className="profiledisplay-rightbox">
                    <h1 className="profiledisplay-name">Please Login: </h1>
                    <NavButton link="/.auth/login/github" linkText="Login" variant="login"/>
                </div>
            </div>
        )
    }

    return (
        <div className="profiledisplay-outerbox">
            <img alt="" src="https://testwebappblobstorage.blob.core.windows.net/images/profile.png" className="profiledisplay-pfp"></img>
            <div className="profiledisplay-rightbox">
                <h1 className="profiledisplay-name">{user.userDetails}</h1>
                <OrderHistory/>
            </div>
        </div>
    )
}
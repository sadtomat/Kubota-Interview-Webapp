import "./Profile.css";
import InfoCard from "../components/InfoCard.jsx";
import {useUser} from "../hooks/useUser.js";

function Profile() {
    const {user, loading} = useUser();

    if (loading) {
        return (
            <div className="outer-box">
                <div className="profile-box">
                    <div className="inner-box">
                        <img src="https://testwebappblobstorage.blob.core.windows.net/images/profile.png" className="profile-img" alt=""/>
                    </div>
                    <div className="info-box">
                        <h1 className="name-text">Loading...</h1>
                        <div className="attributes-box">
                            <InfoCard title="ID:" info=""/>
                            <InfoCard title="Identity Provider:" info=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div className="outer-box">
                <div className="profile-box">
                    <div className="inner-box">
                        <img src="https://testwebappblobstorage.blob.core.windows.net/images/profile.png" className="profile-img" alt=""/>
                    </div>
                    <div className="info-box">
                        <h1 className="name-text">{user.userDetails}</h1>
                        <div className="attributes-box">
                            <InfoCard title="ID:" info={user.userId}/>
                            <InfoCard title="Identity Provider:" info={user.identityProvider}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
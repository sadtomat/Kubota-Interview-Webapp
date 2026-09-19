import VideoAutoplayer from "../components/VideoAutoplayer.jsx";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <VideoAutoplayer videoSrc="https://testwebappblobstorage.blob.core.windows.net/videos/homebackground.mp4" />
            <h1 className="home-title">The Totally Real Website</h1>
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien <br/>
                vitae pellentesque sem placerat.In id cursus mi pretium tellus duis convallis. Tempus <br/>
                leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum <br/> 
                egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper <br/>
                vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
            <div className="bottom-page-box">
                <div className="individual-bottom-box">
                    <h className="bottom-box-header">Commitments</h>
                    <p className="bottom-box-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Quisque faucibus ex sapien vitae pellentesque sem placerat.
                        In id cursus mi pretium tellus duis convallis. Tempus
                        leo eu aenean sed diam urna tempor. Pulvinar vivamus
                        fringilla lacus nec metus bibendum.
                    </p>
                    <img src="https://testwebappblobstorage.blob.core.windows.net/images/home1.jpg" className="bottom-box-image" alt=""/>
                </div>
                <div className="individual-bottom-box">
                    <h className="bottom-box-header">Values</h>
                    <h className="bottom-box-miniheader">Environment!</h>
                    <p className="bottom-box-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    </p>
                    <img src="https://testwebappblobstorage.blob.core.windows.net/images/home2.jpg" className="bottom-box-image" alt=""/>
                </div>
                <div className="individual-bottom-box">
                    <h className="bottom-box-header">Mobile App</h>
                    <img src="https://testwebappblobstorage.blob.core.windows.net/images/home3.jpg" className="app-logo" alt="" />
                    <p className="bottom-box-paragraph">
                        Check out our app at the app store!
                    </p>
                    <a href="https://www.apple.com/ca/app-store/" target="_blank" rel="noreferrer">
                        Learn more ➔
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;
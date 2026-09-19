import "./VideoAutoplayer.css";

export default function VideoAutoplayer({ videoSrc }) {
    return (
        <div className="outerbox">
            <video
                className="video-container"
                autoPlay
                loop
                muted
                playsInline
                onContextMenu={(e) => e.preventDefault()} // Prevent right-click context menu
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
            <div className="innerbox">
                <h1>Welcome to Our Store</h1>
            </div>
        </div>
    )
}
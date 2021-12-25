import { render } from "@testing-library/react"
import { useState, useEffect } from "react/cjs/react.development"
import styles from "./styles/video_item.css"

function VideoItem({video}) {

    const [isClicked, setIsClicked] = useState();

    const videoBackground = {
        backgroundImage: `url(${video.photo_800})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        cursor: "pointer"
    }

    function rerenderVideo() {
        setIsClicked(true);
    }

    if (isClicked) {
        return (
            <div className='video_element' >
                <iframe 
                title={video.title}
                id='video_element' 
                src={video.player + "&autoplay=1"} //??? при autoplay=1 видео сразу начинает проигрываться но без звука
                frameBorder="0"
                allowFullScreen='allowfullscreen'></iframe>
            </div>
        )
    }
    else {
        return (
            <div className="video_element" style={videoBackground} onClick={rerenderVideo}>
                <div className="video_gradient">
                    <div className="video_title">{video.title}</div>
                </div>
            </div>
        )
    }
}

export default VideoItem
import styles from "./styles/videos_stack.css"
import VideoItem from "./video_item"

function VideosStack({videos}) {
    return (
        <div className="videos_stack" id="video_stack">
			{videos.map(video => {
                return <VideoItem video={video} key={video.id}/>
            })}
        </div>
    )
}

export default VideosStack
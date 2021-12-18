import styles from "./styles/videos_stack.css"

function VideosStack(props) {
    return (
        <div class="videos_stack" id="video_stack">
			{props.videos.map(video => {
                return <iframe 
                title={video.title}
                className='video_element' 
                id='video_element' 
                src={video.player} 
                frameborder="0" 
                allowfullscreen='allowfullscreen'></iframe>
            })}
        </div>
    )
}

export default VideosStack
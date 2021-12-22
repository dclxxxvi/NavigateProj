import styles from "./styles/video_item.css"

function VideoItem({video}) {
    return (
        <iframe 
        title={video.title}
        className='video_element' 
        id='video_element' 
        src={video.player} 
        frameBorder="0" 
        allowFullScreen='allowfullscreen'></iframe>
    )
}

export default VideoItem
import styles from './main.css'
import * as tags from '../../constants/tags'
import MainNavigation from './navigation/main_navigation'
import * as loadVideos from '../../video_parsing/parsing'


function Main() {


    
    return (
        <div className="main">
            <MainNavigation 
            institutes={tags.institutes} 
            extra={tags.extra} 
            levels={tags.levels}
            videos={loadVideos.videos}
            />
        </div>
    )
}

export default Main
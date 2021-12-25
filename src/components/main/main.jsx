import styles from './main.css'
import * as tags from '../../constants/tags'
import LevelFilter from './level_filter/level_filter'
import MainNavigation from './navigation/main_navigation'
import * as loadVideos from '../../video_parsing/parsing'


function Main() {

    return (
        <div className="main">
            <LevelFilter levels={tags.levels}/>
            <MainNavigation institutes={tags.institutes} extra={tags.extra} videos={loadVideos.videos}/>
        </div>
    )
}

export default Main
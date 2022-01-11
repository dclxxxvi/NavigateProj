import styles from './main.css'
import * as tags from '../../constants/tags'
import MainNavigation from './navigation/main_navigation'
import * as loadVideos from '../../video_parsing/parsing'
import $ from 'jquery'
import { useEffect } from 'react/cjs/react.development'

function Main() {

    function getUrl(method, params) {
        if (!method) throw new Error('Invalid method');
        params = params || {};
        params['access_token'] = 'ccaab135891789d47a60933d88f6456ea89b8175f6da857c365e779c2c93fc000a4d60ab305039284b949';
        return "https://api.vk.com/method/" + method + "?" + $.param(params);
    }

    function getData() {

    }

    useEffect(() => {
        
    }, [])
        
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